/**
 * Created by Administrator on 2017/9/26 0026.
 */
var pool=require('./db_pool').pool;
var companyReviewSql=require('./companyReviewSql').sql;
exports.companyreviewDao={
    getAllCompanyReviews:function (loginID,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(companyReviewSql.getAllCompanyReviews,[loginID],function (error,result) {
                if(error){
                    callback('e004');
                    // console.log('这是返回的e004');
                    return;
                }
                callback(result);
                client.release();
            })
        })
    }
}