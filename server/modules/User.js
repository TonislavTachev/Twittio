const mongoose = require('mongoose');

const newUserSchema = new mongoose.Schema({
   username:{
       type:String,
       required:true
   },
   password:{
       type:String,
       required:true
   },
   posts:[{type:mongoose.Schema.Types.ObjectId, ref: 'post'}],
   firstName:{
       type:String,
       required:true
   },
   lastName:{
       type:String,
       required:true
   }
})


module.exports = mongoose.model('user', newUserSchema);