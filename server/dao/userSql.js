/**
 * Created by lzhan on 2017/8/25.
 */
exports.sql= {
    getPasswordById: 'SELECT ID,password FROM login where telephone=?',
    addUser: 'insert into login(user,telephone,password,email) values(?,?,?,?)',
    createToken: 'update login set token=? where telephone=?',
    getUserIcon: 'SELECT userlogo from user WHERE loginID = ?',
    updateUserIcon: 'UPDATE `user` SET userlogo = ? WHERE loginID = ?',
    getUserCompany:'SELECT * FROM company,position ,`user` ,login WHERE position.companyID=company.ID AND company.employer = `user`.ID AND login.ID=`user`.loginID AND login.ID=40',
    addUserInfo:'INSERT INTO `user` (loginID,userName,age,sex,telephone,height,strong) VALUES (?,?,?,?,?,?,?)',
}