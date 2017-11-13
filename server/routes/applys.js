/**
 * Created by Administrator on 2017/9/23 0023.
 */
var express = require('express');
var router = express.Router();
var applyDao= require('./../dao/applyDao');


router.get('/',function (req,res,next) {
    applyDao.getApplyPosition(function (result) {
        
    })

});

module.exports = router;

