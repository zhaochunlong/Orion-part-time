/**
 * Created by lzhan on 2017/8/25.
 */
exports.sql={
    getAllPositions:'SELECT * FROM position, clearing,parttimejob,detail WHERE position.clearingID=clearing.ID AND position.parttimejobid = parttimejob.ID AND position.ID=detail.positionID',
    postJob:'INSERT INTO position VALUES (null,?,?,?,?,?,?,?,?,?,?,?,null,null,?)',
    getCompanyId:'SELECT company.ID FROM `user`,company WHERE`user`.ID = company.employer AND `user`.loginID=?',
    getpositionID:'SELECT MAX(ID) positionID FROM position',
    addJob:'INSERT INTO detail VALUES (NULL,?,?,?,?,?,?,NULL,?)',
    getUserID:'SELECT `user`.ID FROM `user` WHERE `user`.loginID = ?',
    addUserid:'INSERT INTO apply (positionID,userID,status) VALUES (?,?,?)',
    getAllJobs:'SELECT position.jobname,position.workplace,position.duration,apply.userID,apply.`status`,parttimejob.position,position.recruitNumber,`user`.loginID FROM position,apply,parttimejob,detail,`user` WHERE apply.positionID=position.ID AND position.parttimejobid = parttimejob.ID AND position.ID=detail.positionID AND apply.userID=`user`.ID',


};