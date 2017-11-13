/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PositionComponent} from "./position.component";
import {PositionDetailComponent } from './position-detail/position-detail.component';
import {Ng2PaginationModule} from "ng2-pagination"

//导入路由模块
import {PositionRoutingModule} from './position-routing.module';


@NgModule({
  declarations: [
    PositionComponent,
    PositionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PositionRoutingModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [PositionComponent]
})
export class PositionModule { }
