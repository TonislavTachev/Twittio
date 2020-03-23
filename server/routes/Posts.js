const express = require('express');
const router = express.Router({mergeParams:true});
const auth = require('../middleware/auth');
const Posts = require('../modules/Post');
const User = require('../modules/User.js');
//get the user's posts that he created
router.get('/', auth, async(req,res)=>{

     const {id} = req.user;
     try {

         let posts = await Posts.find({});
         res.json(posts);   
     } catch (error) {
         
     }
})

//create a post
router.post('/create', auth, async(req,res)=>{
       
       //get the user id 
       const {id} = req.body;

       //get the params for the post
       const {headline, base,img} = req.body;
       const post = new Posts();
       post.headline = headline,
       post.base = base,
       post.img = img

       //save the post inside the posts array in the user model
       post.save().then((result) =>{
           User.findOne({id}, (err, user) =>{
               if(user){
                   user.posts.push(post);
                   user.save();
                   res.json(post);
               }
           })
       }).catch((error)=>{
           res.status(500).json({error});
       })

});

module.exports = router