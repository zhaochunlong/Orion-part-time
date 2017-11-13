import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
// import {Router} from "@angular/router";

@Injectable()
export class PositionTitleService {

  url:string='http://localhost:3000/positions';
  constructor(private http:HttpClient
             ) { }

  getAllPositions(callback){
    this.http.get(this.url).subscribe(function (result) {
      callback(result);
    })
  }

}
