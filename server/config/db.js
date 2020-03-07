const mongoose = require('mongoose');
const dbString = 'mongodb+srv://Tachevv:totosasa123@twitterclone-r7gso.mongodb.net/test?retryWrites=true&w=majority'

const connectDB = async () =>{

    try{
   await mongoose.connect(dbString, {
       useNewUrlParser:true,
       useCreateIndex:true,
       useFindAndModify:false,
       useUnifiedTopology:true
   })
     console.log('Database connected!');
   } catch(error){
       console.log(error.message)
   }
}

module.exports = connectDB;