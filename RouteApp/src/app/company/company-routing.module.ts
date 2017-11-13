
/**
 * Created by Administrator on 2017/9/16 0016.
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';

import {CompanyComponent} from "./company.component";
import {CheckComponent} from "../company/check/check.component";
import {EndAuditComponent} from "./end-audit/end-audit.component";
import {InReviewComponent} from "./in-review/in-review.component";
import {ManageComponent} from "./manage/manage.component";
import {CompanyMessageComponent} from "./company-message/company-message.component";
import { CompanyProfileComponent } from './company-profile/company-profile.component';



const routes: Routes = [
  {
    path:'company',
    component:CompanyComponent,
    children:[
      {
        path: 'check',
        component: CheckComponent
      },
      {
        path: 'end_audit',
        component: EndAuditComponent
      },
      {
        path: 'in_review',
        component: InReviewComponent
      },
      {
        path: 'manage',
        component: ManageComponent
      },
      {
        path: 'company_message',
        component: CompanyMessageComponent
      },
      {
        path: 'company_profile',
        component: CompanyProfileComponent
      },
      {
        path: '',
        redirectTo: 'manage',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CompanyRoutingModule {}
