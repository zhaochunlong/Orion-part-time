/**
 * Created by Administrator on 2017/9/26 0026.
 */
var pool=require('./db_pool').pool;
var companyEndSql=require('./companyEndSql').sql;
exports.companyendDao={
    getAllCompanyEnds:function (loginID,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companyEndSql.getAllCompanyEnds,[loginID],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result);
                callback(result);
                client.release();
            })
        })
    }
}