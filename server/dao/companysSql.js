/**
 * Created by Administrator on 2017/9/27 0027.
 */
exports.sql={
    getUserId:'SELECT `user`.ID FROM `user` WHERE `user`.loginID=?',
    addcompany:'INSERT INTO company VALUES (null,NULL,?,?,NULL,?,?,?,?)',
    getuserCompanys:'SELECT company.ID FROM company WHERE company.employer = ?',
    updataCompany:'update company set `companyInfo`=?,tradeID=?,companyForShort=?,site=?,companyinpro=? where employer=?',
    addUserid:'INSERT INTO `user` VALUES (NULL,?,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)'
};