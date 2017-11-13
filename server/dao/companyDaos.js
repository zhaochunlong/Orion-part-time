/**
 * Created by Administrator on 2017/9/27 0027.
 */
var pool=require('./db_pool').pool;
var companysSql=require("./companysSql").sql;


exports.companyDao={

    getUserId:function (model,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companysSql.getUserId,[model],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },

    addcompany:function (model,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companysSql.addcompany,[model.name,model.employer,model.recommend,model.recruit,model.site,model.details],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    getuserCompanys:function (employer,callback) {
        console.log(employer);
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companysSql.getuserCompanys,[employer],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    },
    updataCompany:function (model,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companysSql.updataCompany,[model.name,model.recommend,model.recruit,model.site,model.details,model.employer],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                // console.log('修改成功');
                callback(result.affectedRows);
                client.release();
            })
        })
    },
    addUserid:function (model,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companysSql.addUserid,[model],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result.affectedRows);
                client.release();
            })
        })
    }

};