const express = require('express');
const router = express.Router({mergeParams:true});
const auth = require('../middleware/auth');
const Posts = require('../modules/Post');
const User = require('../modules/User.js');
const Comment = require('../modules/Comments');




module.exports = router;