import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


//导入其他组件
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SpyComponent } from './spy/spy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import {PositionModule} from './position/positon.module';
import {SpyModule} from './spy/spy.module';
import{AppRoutingModule} from './app-routing.module';
import { PositionTitleComponent } from './position-title/position-title.component';
import { CompanyTitleComponent } from './company-title/company-title.component';
import { SpyDetailComponent } from './spy-detail/spy-detail.component';
import {UserModule} from "./user/user.module";
import {CompanyModule} from "./company/company.module";
import { NavComponent } from './nav/nav.component';
import {Ng2PaginationModule} from "ng2-pagination"


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SpyComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistComponent,
    PositionTitleComponent,
    CompanyTitleComponent,
    SpyDetailComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PositionModule, //职位模块
    SpyModule,//公司模块
    CompanyModule,//企业版模块
    UserModule,//用户模块
    AppRoutingModule,//路由
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
