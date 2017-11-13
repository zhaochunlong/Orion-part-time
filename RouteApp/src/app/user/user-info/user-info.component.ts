import {Component, Directive, OnInit} from '@angular/core';
import { NgSwitch } from '@angular/common';
import {any} from "codelyzer/util/function";
import { usersite } from './usersite';
import { LocalStorage } from './../../services/localStorage.service';
import {UserService} from "./../../services/user.service";
import {routerNgProbeToken} from "@angular/router/src/router_module";

declare  var $:any;
@Component({
  moduleId:module.id,
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers: [LocalStorage,UserService]
})

export class UserInfoComponent implements OnInit {
  model = new usersite(1,'','','','','','','','','','');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
  active = true;
  newusersite() {
    this.model = new usersite(10,'','','','','','','', '','','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  // constructor(private cs:CompanyService) {
  // }
  private num = 3;
  changeElementOne(): void {
    this.num=0;
  }
  changeElementTwo():void{
    this.num=1;
  }
  constructor(
    private local:LocalStorage,
    private us:UserService
  ) { }

  userId:any;
  ngOnInit() {
  }
  // addcompany(model){
  //   let user = localStorage.getItem('userId');
  //   let that = this;
  //   console.log(model);
  //
  //   model.userID=user;
  //
  //   that.cs.addcompany(model,function (result) {
  //
  //     if(result.stateCode==1){
  //       alert('公司信息提交成功');
  //       location.reload();
  //     }else if(result.stateCode==2){
  //       alert('公司信息修改成功');
  //     }else {
  //       alert('操作失败');
  //     }
  //   })
  //
  // }


  addUserInfo(model){
    // console.log(model);
    let user = localStorage.getItem('userId');
    let that = this;
    // console.log(model);

    model.userID=user;
    console.log(model);

    that.us.addUserInfo(model,function (result) {
      console.log(JSON.stringify(model)+'这里是前台第二次');
      console.log(result);
      if(result.stateCode==6){
        // location.reload();
        alert('用户信息添加成功');
      }else {
        alert('请将信息完善之后再添加');
      }

    })
  }

}
