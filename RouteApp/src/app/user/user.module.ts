/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// 注册子组件
import { UserJoinComponent } from '../user/user-join/user-join.component';
import { UserIntentionComponent } from '../user/user-intention/user-intention.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import { UserResumeComponent } from './user-resume/user-resume.component';
import {UserChangePasswordComponent} from './user-change-password/user-change-password.component';
import {Ng2PaginationModule} from "ng2-pagination"

// 注册父组件
import {UserComponent} from "./user.component";

// 导入路由模块
import {UserRoutingModule} from "./user-routing.module";



@NgModule({
  declarations: [
    UserJoinComponent,//报名参加组件
    UserIntentionComponent,//用户意向组件
    UserInfoComponent, //用户信息组件
    UserResumeComponent,//个人简历模块
    UserChangePasswordComponent,//修改密码
    UserComponent,//用户模块
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserRoutingModule,//个人中心路由模块
    Ng2PaginationModule

  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
