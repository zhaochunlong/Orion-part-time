import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";



@Injectable()
export class CompanyReviewService {

  url:string='http://localhost:3000/company/in_review';
  constructor(private http:HttpClient
  ) { }


  getAllCompanyReviews(user,callback){
    this.http.post(this.url,user).subscribe(function (result) {
        console.log('我在company_check.service里');
        callback(result);
      },function (error) {
        console.log(error+'company_check----footer')
      }
    )
  }





}
