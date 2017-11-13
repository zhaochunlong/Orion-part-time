import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
// import {Router} from "@angular/router";

@Injectable()
export class PositionService {

  url:string='http://localhost:3000/positions';
  constructor(private http:HttpClient
             ) { }

  getAllPositions(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
      console.log("-------------a-------");
    })
  }

  getPosutionsById(ID,callback){
    //ID没用到
    this.getAllPositions(function (positions) {
      let po=positions.filter(function (item,index) {
        if(item.ID==ID){
          console.log("getAllPositions--ID"+ID);
          // console.log(item);
          return item;
        }
      });

      callback(po);
    })

  }

  postJob(model,callback){
    // console.log(model+'这里是服务第1次');
    this.http.post(this.url+'/postJob',model).subscribe(function (result) {
      // console.log(result);
      callback(result);
    },function (error) {
      console.log(error.message);
    })
  }

  getApply(position,callback){
    return this.http.post(this.url+'/apply',position).subscribe(function (res) {
      callback(res);
    });
  }

  getAllJobs(callback){
    this.http.get(this.url+'/job').subscribe(function (result) {
      callback(result);
      // console.log('服务输出的job');
    })
  }


}
