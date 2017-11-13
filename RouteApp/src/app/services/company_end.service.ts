import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";



@Injectable()
export class CompanyEndService {

  url:string='http://localhost:3000/company/end_audit';
  constructor(private http:HttpClient
  ) { }


  getAllCompanyEnds(user,callback){
    this.http.post(this.url,user).subscribe(function (result) {
        console.log('我在company_check.service里');
        callback(result);
      },function (error) {
        console.log(error+'company_check----footer')
      }
    )
  }





}
