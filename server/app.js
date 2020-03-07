const express = require('express');
const app = express();
const db = require('./config/db');

//init database
db();

//init middleware
app.use(express.json({extended: false}));


//define routes
app.use('/api/auth', require('./routes/Auth.js'));
app.use('/api/', require('./routes/Posts.js'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})