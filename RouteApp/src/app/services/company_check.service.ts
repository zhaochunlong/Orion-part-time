import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
// import {Router} from "@angular/router";

@Injectable()
export class CompanyCheckService {

  url:string='http://localhost:3000/company/check';
  constructor(private http:HttpClient
             ) { }

  getAllCompanys(user,callback){
    this.http.post(this.url,user).subscribe(function (result) {
      console.log('我在company_check.service里');
      callback(result);
    },function (error) {
      console.log(error+'company_check----footer')
      }
    )
  }

}
