const jwt = require('jsonwebtoken');
const config = require('config');
const auth = (req,res,next) =>{
   
   //extract the token from the header parameter
   let token = req.headers['x-auth'];

   //decode the token 
   let decoded = jwt.verify(token, config.get('jwtSecret'));

   if(decoded){
       req.user = decoded.tokenUser.id;
       next();
   } 
}

module.exports = auth;