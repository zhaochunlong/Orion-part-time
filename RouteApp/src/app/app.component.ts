import {Component, OnInit} from '@angular/core';

//导入服务
import {UserService} from "./services/user.service";

import { LocalStorage } from './services/localStorage.service';
import {Router} from "@angular/router";
import {log} from "util";
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,LocalStorage]
})
export class AppComponent {
  flag:boolean = false;
  title = 'app';
  url:string='localhost:4200/';
  login_res:string;
  _val:string='';
  regist_pwd:string;
  regist_pwd_su:string;
  register_res: string;
  _email:string;
  showSelect:boolean=true;
  hiddenNavs: boolean=true;
  userName:any;

  //验证码初始
  _gain:boolean;
  gain_mes:any;
  gain_time=59;
  _code:any;
  code:any;
  telephone:any;

  constructor(
    private userSer: UserService,
    private local: LocalStorage,
    private router:Router,
  ) {}

  private timer;
  // 发送验证码
  Gain(phone_form) {
    const that = this;
    that._gain = true;
    that.timer = setInterval(() => {
      that.gain_mes = that.gain_time + '秒重新获取';
      that.gain_time--;
      if (that.gain_time < 0) {
        that._gain = false;
        that.gain_time = 59;
        clearInterval(that.timer);
      }
    }, 1000);
    // 获取手机号以及验证码
    that._code = phone_form.form.value.code;
    // console.log('code值'+that._code);
    that.telephone=phone_form.form.value.regist_telephone;
    console.log('输入的手机号：'+that.telephone);
    that.userSer.gainregist( {'telephone':that.telephone}, function (result) {
      that.code = result.code;
      console.log('返回回来之后的：'+that.code);
    })
  };


  funcShowSelect(){
    this.showSelect=true;
    console.log("a");
  }
  funcHiden(){
    this.showSelect=false;
    console.log("a");
  }

  ngOnInit(){
    this.userName =this.local.get('username');
    this.showSelect=false;
    // alert(this.userName);

    this.hiddenNavs = Boolean(this.local.get("username"));
    // alert(this.hiddenNavs);
    //
    // if(this.local.get('username')){
    //   // $('#user').html('<li>'+this.local.get('username')+'</li>');
    //   $('#user').html('<li id="block" (mouseenter)="funcShowSelect()" (mouseleave)="funcHiden()" style="float: right">'+
    //     ''+this.local.get('username')+'<div class="dropdown" id="dropout" *ngIf="showSelect">'+
    //     '退出登录'+
    //     '</div>'+
    //     '</li>');
    //
    // }else {
    //
    //   alert('oninit')
    //   $('#user').html('<button   data-toggle="modal" data-target="#login" style="height: 0;border: none;padding: 0px">'+
    //     '<li style="height: 40px;margin-top: 5px;margin-right: 10px"><a routerLink="/login" style="color:#FEC24E">登录</a></li>'+
    //     '</button>'+
    //     '<button  data-toggle="modal" data-target="#register" style="height: 0;border: none;padding: 0px">'+
    //     '<li style="height: 40px;margin-top: 5px"><a routerLink="/regist" style="color:#FEC24E">注册</a></li>'+
    //     '</button>')
    // }

  }

  ngAfterContentChecked(){
    this.hiddenNavs = Boolean(this.local.get("username"));
  }

// ------------------------------------------------------------登录
  tologin(loginForm) {
    let that = this;
    that.userSer.login(loginForm.form.value, function (result) {
      console.log(result +'zheli');
      if(result && result.stateCode==1){
        that.local.set('userId', result.userId);
        that.local.set('token', result.token);
        that.local.set('username', result.user_name);

        that.flag=false;
        that.router.navigate(['/index']);
        location.reload();
        $('#closeBtn').click();
        // if(result.user_name){
        //   alert(result.user_name)
        //   $('#user').html('<li>'+result.user_name+'</li>');
        // }else {
        //   $('#user').html('<button   data-toggle="modal" data-target="#login" style="height: 0;border: none;padding: 0px">'+
        //     '<li style="height: 40px;margin-top: 5px;margin-right: 10px"><a routerLink="/login" style="color:#FEC24E">登录</a></li>'+
        //     '</button>'+
        //     '<button  data-toggle="modal" data-target="#register" style="height: 0;border: none;padding: 0px">'+
        //     '<li style="height: 40px;margin-top: 5px"><a routerLink="/regist" style="color:#FEC24E">注册</a></li>'+
        //     '</button>')
        // }

      }else if(result.stateCode==3){
        that.login_res='该用户不存在'
      }else
      {
        that.login_res='用户名或者密码错误';
      }
    })
  }


// -----------------------------------------------------注册
  //验证密码是否一致
  ispass(){
    if(this.regist_pwd==this.regist_pwd_su){
      return false
    }else {
      return true
    }
  }



  toregist(registerForm){
    let that = this;
    that.userSer.regist(registerForm.form.value,function (result) {
      if(result.stateCode==6){
        that.router.navigate(['/index']);
        $('#closeBtnR').click();
        $('#login_btn').click();
      }else if(result.stateCode==5){
        alert('该用户已经注册');
      }else {
        that.register_res='用户名或者密码错误';
      }
    })
  }


  log_out() {
    if (this.local.get("token")) {
      this.local.remove("username");
      this.local.remove("userId");
      location.reload();
      console.log("已经退出");
    }
    else {
      console.log("session为空");
    }
  }
}


//退出




