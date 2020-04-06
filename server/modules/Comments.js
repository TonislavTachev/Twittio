const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    }
},
{
    toJSON:{
        virtuals:true
    }
})

module.exports = mongoose.model('comment', commentsSchema);