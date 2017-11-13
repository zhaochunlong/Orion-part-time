/**
 * Created by Administrator on 2017/9/27 0027.
 */
var express = require('express');
var router = express.Router();

var companyDaos = require('../dao/companyDaos').companyDao;


router.post('/addcompany',function (req,res,next) {

    var userId=req.body;
    if(userId){
        var id=parseInt(userId.userID);

        companyDaos.getUserId(id,function (result) {
            var userID = result;
            if(result.length==0){
                console.log('数组长度为零');

                //想User表中啊添加loginId获取UserId
                companyDaos.addUserid(id,function (result) {
                    if(result==1){

                        //LoginId插入成功，获取UserId
                        companyDaos.getUserId(id,function (result) {
                            console.log(result+'这是获取的User啊');
                            if(result.length==0){

                                //获取UserId失败
                                req.json({'stateCode':8})
                            }else {

                                //获取UserId成功，查询company表中是否已经含有(查询公司ID)
                                var employer = result[0].ID;
                                companyDaos.getuserCompanys(employer,function (result) {

                                    if(result.length==0){

                                        //如不存在的话执行添加语句
                                        userId.employer=employer;
                                        companyDaos.addcompany(userId,function (result) {
                                            if(result==1){
                                                res.json({'stateCode':1})
                                            }else {
                                                res.json({'stateCode':8})
                                            }
                                        })
                                    }else {
                                        //存在执行更新语句
                                        companyDaos.updataCompany(userId,function (result) {
                                            if(result==1){
                                                res.json({'stateCode':2})
                                            }else {
                                                console.log('更新失败')
                                            }
                                        })
                                    }
                                })

                            }
                        })


                    }else {
                        //LoginId添加失败
                        res.json({'stateCode':7})
                    }
                })

            }else {
                //执行获取公司的ID
                userId.employer=result[0].ID;
                companyDaos.getuserCompanys(userID[0].ID,function (result) {

                    if(result.length==0){
                        //如不存在的话执行添加语句
                        companyDaos.addcompany(userId,function (result) {
                            if(result==1){
                                res.json({'stateCode':1})
                            }else {
                                res.json({'stateCode':8})
                            }
                        })
                    }else {
                        //存在执行更新语句
                        companyDaos.updataCompany(userId,function (result) {
                            if(result==1){
                                res.json({'stateCode':2})
                            }else {
                                console.log('更新失败')
                            }
                        })
                    }
                })

            }
        })
    }else {
        res.json({'stateCode':2});
    }
});





module.exports = router;