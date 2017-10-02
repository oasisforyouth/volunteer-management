var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js')


router.post('/', function(req, res){
    console.log('post route hit server')
    res.sendStatus(200);
})





module.exports = router;