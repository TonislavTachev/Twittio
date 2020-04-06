const mongoose = require('mongoose');

const newPostSchema = new mongoose.Schema({
    img:String,
    headline:{
        type:String,
    },
    comments:[{type:mongoose.Schema.Types.ObjectId, ref:'comment'}],
    base:{
        type:String,
        required:true
    },
    createdAt:Date},
    {
  toJSON: {
    virtuals: true,
  },
})

module.exports = mongoose.model('post', newPostSchema);