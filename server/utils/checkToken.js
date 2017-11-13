/**
 * Created by Administrator on 2017/9/26 0026.
 */
var jwt=require('jwt-simple');
// var util=require('../utils/util');
var util = require('./util');
exports.checkToken=function (req,res,next) {
    var token=req.header('token') || req.query.token || req.body.token;
    console.log(token);
    try {
        var decoded = jwt.decode(token, util.secret);

        if(decoded.exp>= new Date().valueOf()){
            next();
        }else {
            res.json({stateCode:2});
        }
    }catch (e){
        console.log('HERE');
        res.json({stateCode:2});
    }
}