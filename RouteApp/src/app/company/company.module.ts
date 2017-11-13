/**
 * Created by Administrator on 2017/9/16 0016.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//导入组件
import {CompanyComponent} from "./company.component";
import { ManageComponent } from './manage/manage.component';
import { CheckComponent } from './check/check.component';
import { InReviewComponent } from './in-review/in-review.component';
import { EndAuditComponent } from './end-audit/end-audit.component';
import { CompanyMessageComponent } from './company-message/company-message.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
//导入路由
import {CompanyRoutingModule} from './company-routing.module';






@NgModule({
  declarations: [
    CompanyComponent,
  ManageComponent,//职位管理
  CheckComponent,//待审核
  InReviewComponent, //审核中
  EndAuditComponent, //审核结束
  CompanyMessageComponent,//公司信息
  CompanyProfileComponent,//公司资料
  ],

  imports: [
    BrowserModule,
    FormsModule,
    CompanyRoutingModule//路由
  ],

  providers: [],
  bootstrap: [CompanyComponent]
})
export class CompanyModule { }
