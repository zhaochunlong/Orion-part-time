import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";




@Injectable()
export class CompanyService {
  url:string='http://localhost:3000/companys';

  constructor(private http:HttpClient) { }

  getCompanyPosition(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
      console.log("-------------a-------");
    })
  }


  addcompany(model,callback){
    this.http.post(this.url+'/addcompany',model).subscribe(function (result) {
      // console.log(result);
      callback(result);
    },function (error) {
      console.log(error.message);
    })

  }

}
