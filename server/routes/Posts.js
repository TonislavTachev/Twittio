const express = require('express');
const router = express.Router({mergeParams:true});
const auth = require('../middleware/auth');
const Posts = require('../modules/Post');
const User = require('../modules/User.js');
//get the user's posts that he created
router.get('/', auth, async(req,res)=>{

     const {id} = req.user;
     try {

         let posts = await User.findOne({id}).populate('posts');
         res.json(posts.posts);   
     } catch (error) {
         
     }
})

//get one post
router.get('/:post_id', auth,async(req,res)=>{
    
     const {id} = req.user;
     const {post_id} = req.params.post_id;
      const user = User.findOne({id});
   
   if(user){
      const post = await Posts.findById(req.params.post_id);
      res.json(post);
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

router.put('/update/:post_id', auth, async(req,res)=>{
     
     const {id} = req.user;
     const {post_id} = req.params.post_id
     const {base} = req.body;
     const user = await User.findOne({id});

     const postFields = {};
     if(base) postFields.base = base;

     if(user){
       console.log(req.params.post_id);

       const post = await Posts.findByIdAndUpdate(req.params.post_id, req.body, {new:true});
       res.json(post);
     }
})

module.exports = router