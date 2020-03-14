const jwt = require('jsonwebtoken');
const config = require('config');
const auth = async(req,res,next) =>{
   
   //extract the token from the header parameter
   let token = req.headers['x-auth'];

   //decode the token 
   try {
       
    let decoded = await jwt.verify(token, config.get('jwtSecret'));
       req.user = decoded.tokenUser.id;
       next();  
   } catch (error) {
       return res.status(401).json({msg: 'Token is not valid'});
   }
   
}

module.exports = auth;