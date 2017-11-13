/**
 * Created by Administrator on 2017/9/23 0023.
 */
var pool=require('./db_pool').pool;
var applySql=require('./applySql').sql;
exports.applyDao={
    getApplyPosition:function (callback) {
        pool.getConnection(function (error,client) {
            if (error) {
                return
            }
            client.query(applySql.addPosition,function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                callback(result);
                client.release();
            })

            })
        }
}