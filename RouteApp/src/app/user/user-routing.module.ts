/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from '../user/user.component';

import { UserJoinComponent } from '../user/user-join/user-join.component';
import { UserIntentionComponent } from '../user/user-intention/user-intention.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';
import {UserResumeComponent} from '../user/user-resume/user-resume.component';
import {UserChangePasswordComponent} from './user-change-password/user-change-password.component';



const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    children:[
  {
    path: 'user_join',
    component: UserJoinComponent
  },
  {
    path: 'user_intention',
    component: UserIntentionComponent
  },
  {
    path: 'user_info',
    component: UserInfoComponent
  },
      {
        path:'user_resume',
        component:UserResumeComponent
      },
      {
        path:'user_change_password',
        component:UserChangePasswordComponent
      },
      {
        path: '',
        redirectTo: 'user_join',
        pathMatch: 'full'
      },
  ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
