var express = require('express');
var router = express.Router();
var util = require('./../utils/util');
var formidable=require('formidable');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var fs=require('fs');
var userdao = require('./../dao/userDAO').userDao;

var sms=require('../yanzheng');


router.get('/login', function (req, res, next) {
    var user = req.query;
    console.log('here');
    console.log(user);
    res.json({"stateCode": 3});
});
router.post('/login', function (req, res, next) {
    var user = req.body;
    if (user) {
        console.log(user);
        userdao.getPasswordById(user.telephone, function (result) {
            console.log(result[0].ID)
            if (result == 'e004') {
                res.json({"stateCode": 'e004'});
            } else {
                if (result.length == 0) {
                    res.json({"stateCode": 3});
                } else {
                    // console.log(result[0].password)
                    // console.log(util.MD5(user.password));
                    if (result[0].password == util.MD5(user.password)) {
                        var ID=result[0].ID
                        var username=user.telephone
                            // res.json({"stateCode": 1});
                            console.log(result[0])
                            //产生令牌
                            var _token = util.createUnique();
                            console.log(_token);
                            userdao.createToken(user.telephone, _token, function (result) {
                                // if (result.affectedRows == 1) {
                                    res.json({"stateCode": 1, "token": _token,"user_name":username,"userId":ID});
                                // }
                            });
                        } else {
                            res.json({"stateCode": 2});
                        }
                    }
                }
        })

    }
});
router.post('/upload', function (request, response, next) {

    console.log('到uploadl');
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    form.parse(request, function (err, fields, files) {
        if (err) {
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        console.log(fields);
        var extName = '';  //后缀名
        switch (files.userIcon.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            response.json({"stateCode":'e005'});
            return;
        } else{
            form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 6 * 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            // 'public/uploads/d23242343242.jpg'
            var newPath = form.uploadDir + avatarName;
            // console.log("newpath---"+newPath);
            // fs.renameSync(files.user_icon.path, newPath);  //重命名
            var picBase = fs.readFileSync(files.userIcon.path,'base64');
            var dataBuffer = new Buffer(picBase, 'base64'); //把base64码转成buffer对象，
            fs.writeFile( newPath,dataBuffer, function (err) {
                if(err){
                    response.json({"stateCode":'e005'});
                    console.log('读取图片错误');
                    return;
                }
                userdao.updateUserIcon(fields.userId,avatarName,function (result) {
                    console.log('123123'+result);
                    if(result.affectedRows == 1){
                        response.json({"stateCode":1});
                        console.log(result);
                    }else{
                        response.json({"stateCode":0});
                    }
                })
            })

        }

    })



});


router.post('/regist', function (req, res, next) {
    var users=req.body;
    if(users){
        users.regist_password=util.MD5(users.regist_password);
        userdao.addUser(users,function (result) {
            if(result==1){
                res.json({'stateCode':6})
            }else{
                if(result==5){
                    res.json({'stateCode':5})
                }

            }
        })

    }else {
        console.log('dddddddd');
        res.send('respond with a resource');
    }

});

router.post('/gainregist', function (req, res, next) {
    var users=req.body;
    if(users){
        console.log(users);
        userdao.addUser(users,function (result) {
            if(result==5){
                res.json({'stateCode':5})
            }else{
                var telephone = users.telephone;
                console.log(telephone);
                code = '';
                while (code.length < 6) {
                    code += Math.floor(Math.random() * 9);
                }
                sms.sendMessage(telephone,"SMS_100850007","{\"code\":\"" + code + "\"}",function (result) {
                    res.json({'code':code});
                    console.log('返回值'+code)
                });

            }
        })

    }else {
        console.log('dddddddd');
        res.send('respond with a resource');
    }

});


router.post('/getUserIcon', function (req, res, next) {

    var userId=req.body.userId;
    console.log('lalalalalalalal'+userId);
    userdao.getUserIcon(userId,function (result) {
        console.log(result[0].userlogo+'sssssssssssssssssssssssssss');
        if(result.length==0){
            res.json({"icon":"icon_default.jpg"});
        }else {
            res.json({"icon":result[0].userlogo});
        }
    })
});

router.post('/getUserCompany',function (req,res,next) {
    var userId=req.body.userId;
    console.log('kkkkkkkkkkkkkkkkkkkk'+userId);
    userdao.getUserCompany(userId,function (result) {
        // console.log(result[0].userlogo+'sssssssssssssssssssssssssss');
        if(result.length==0){
            res.json(null);
        }else {
            res.json(result);
        }
    })
});

router.post('/addUserInfo',function (req,res,next) {
    var model = req.body;
    // console.log(model);
    // var userID = model.userID;

    userdao.addUserInfo(model,function (result) {
        if(result==1){
            res.json({'stateCode':6})
        }else {
            res.json({'stateCode':0})
        }
    })
});




module.exports = router;
