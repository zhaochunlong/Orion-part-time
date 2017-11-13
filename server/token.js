/**
 * Created by Administrator on 2017/9/26 0026.
 */
/**
 * Created by WWL on 2017/9/18.
 */



var jwt=require('jwt-simple');
var moment = require('moment');


var token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxMzU2OTA0MDAxNSIsImV4cCI6MTUwNjg2NjgzNjY2Mn0.MhJNZxDHhfGhWRi4Oh-gmPTi7MpltC8UcCYb9LxyPmc';
//解析token
var decoded = jwt.decode(token,'com.TTravel');

console.log(decoded);
console.log("<<<<<<<<<<<<<");
