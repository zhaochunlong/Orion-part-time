/**
 * Created by Administrator on 2017/9/12 0012.
 */
//导入组件
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PositionComponent} from './position.component';
import {PositionTitleComponent} from "../position-title/position-title.component";
import {CompanyTitleComponent} from '../company-title/company-title.component';

//设置路由
const routes: Routes = [
  {
    path:'position_title/:ID',
    component:PositionTitleComponent
  },
  {
    path:'company_title',
    component:CompanyTitleComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PositionRoutingModule {}
