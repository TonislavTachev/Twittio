const express = require('express');
const router = express.Router();
const User = require('../modules/User.js');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');


//@route /
//@access private
//@method get token and return user
router.get('/', auth, async(req,res)=>{

   try {
    const {id} = req.user;
   //find the user
   let user = await User.findOne({id}).select('-password');

   res.json(user);
       
   } catch (error) {
      res.status(401).json({msg:"Invalid credentials"});
   }
   
})


//@route /signup
//@access public
//@method create account and generate token
router.post('/signup',[
        check('username').isEmail(),
        check('password').isLength({min:6})
    ],async(req,res)=>{
    
    //validate input field on the backend
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()});
    }

    const {username, password, firstName,lastName} = req.body

    try {
       var newUser = await User.findOne({username});

       if(newUser){
           return res.status(400).json({msg:"Username already in use"});
       }



    let user = new User({
        username,
        password,
        firstName,
        lastName
    })
    const salt = await bcrypt.genSalt(10); //determines how secure the salt is
    
    //generate a hash of the user's password
    user.password =  await bcrypt.hash(password, salt);
    
    await user.save();

    const tokenUser = {
        id: user._id
    }

    jwt.sign({tokenUser},config.get('jwtSecret'), {expiresIn:'300000000'}, (err, token)=>{
        res.status(200).json(token);
    })

    } catch (error) {
        console.log(error.message);
       res.status(500).send('Server error');
    }

})

//@route /login
//@access public
//@method get credentials and create token
router.post('/login',[check('username').isEmail(),
check('password').isLength({min:6})], 
async(req,res)=>{

const {username, password} = req.body;

let user = await User.findOne({username});

//if user exists get password from db and compare 
if(user){
 
 let isTrue = await bcrypt.compare(password, user.password);
//if passwords match, proceed to generate a token
 if(isTrue === true){
     const tokenUser = {
         id:user._id
     }

     jwt.sign({tokenUser}, config.get('jwtSecret'), {expiresIn:'3000000'}, (err,token)=>{
          res.status(200).json(token);
     })
 } else {
    res.status(401).json({msg:"Invalid login credentials!"});
 }

} else {
res.status(404).json({msg:"No profile with associated email found!"});
}
})


module.exports = router