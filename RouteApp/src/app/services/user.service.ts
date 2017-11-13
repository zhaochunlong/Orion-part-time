import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {
  url:string='http://localhost:3000/users';

  constructor(private http:HttpClient) { }

  login(user,callback){
    console.log(user+'user.ts');
    this.http.post(this.url+'/login',user).subscribe(function (result) {
      console.log(result);
      callback(result);
  },function (error) {
      console.log(error.message+'aaaaaaa')
    })


  }

  regist(user,callback){
    console.log(user);
    this.http.post(this.url+'/regist',user).subscribe(function (result) {
      console.log(result);
      callback(result);
    },function (error) {
      console.log(error.message+'bbbbbbbb')
    })
  }

  addUserInfo(model,callback){
    // console.log(model+'这里是服务第1次');
    this.http.post(this.url+'/addUserInfo',model).subscribe(function (result) {
      // console.log(result);
      callback(result);
    },function (error) {
      console.log(error.message);
    })
  }

  gainregist(user,callback){
    this.http.post(this.url+'/gainregist',user).subscribe(function (result) {
      console.log(result);
      callback(result);
    },function (error) {
      console.log(error.message+'ccccccccccc')
    })
  }


}
