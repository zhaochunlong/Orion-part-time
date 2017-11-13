import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router";
import {Router} from "@angular/router";


// 导入服务
import {CompanyCheckService}from '../../services/company_check.service';
import {LocalStorage} from '../../services/localStorage.service';
// import {localStorage} from '../../services/localStorage.service';
declare var $:any;
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers:[CompanyCheckService,LocalStorage],
  // providers:[localStorage],
})
export class CheckComponent implements OnInit {
  companys:any;
  userID:any;
  applyId:any;
  constructor(
    private ck:CompanyCheckService,
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
    console.log(user+'我在check里36行哦');
    that.ck.getAllCompanys(this.userID,function (result) {
      that.companys=result;
      console.log(that.companys);
    })
  }
  updata(index){
    let that=this;
    console.log(index);
    that.applyId=that.companys[index].applyID;
    console.log(that.applyId);
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/company/updata',
      data: {"applyId": that.applyId} ,
      dataType:"json",
      success: function (result) {
        // alert('ok');
        if (result == 1) {
          location.reload();
          // alert('修改成功');
        }else {
          // alert('修改失败');
        }
      },
      error: function (err) {
        alert('error');
      }
    });
  }
  updatas(i){
    let that=this;
    console.log(i);
    that.applyId=that.companys[i].applyID;
    console.log(that.applyId);
    $.ajax({
      type: 'post',
      url: 'http://localhost:3000/company/updatas',
      data: {"applyId": that.applyId} ,
      dataType:"json",
      success: function (result) {
        // alert('ok');
        if (result == 1) {
          location.reload();
          // alert('修改成功');
        }else {
          // alert('修改失败');
        }
      },
      error: function (err) {
        alert('error');
      }
    });
  }
}
