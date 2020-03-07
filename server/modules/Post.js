const mongoose = require('mongoose');

const newPostSchema = new mongoose.Schema({
    img:String,
    headline:{
        type:String,
        required:true
    },
    base:{
        type:String,
        required:true
    },
    createdAt:Date

})

module.exports = mongoose.model('post', newPostSchema);