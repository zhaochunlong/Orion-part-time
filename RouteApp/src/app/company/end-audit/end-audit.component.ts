import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router";
import {Router} from "@angular/router";

//导入服务
import {CompanyEndService}from '../../services/company_end.service';
import {LocalStorage} from '../../services/localStorage.service';

@Component({
  selector: 'app-end-audit',
  templateUrl: './end-audit.component.html',
  styleUrls: ['./end-audit.component.css'],
  providers:[CompanyEndService,LocalStorage],
})
export class EndAuditComponent implements OnInit {
  companyends:any;
  userID:any;

  constructor(
    private end:CompanyEndService,
    private router:Router,
    private route:ActivatedRoute,
    private loaclstorage:LocalStorage
  ) { }

  ngOnInit() {
    let that=this;
    // var user={};
    var user = that.loaclstorage.get('userId');
    var users=parseInt(user);
    this.userID={id:users};
    console.log(user+'用户本地存储用');
    that.end.getAllCompanyEnds(this.userID,function (result) {
      that.companyends=result;
    })
  }

}
