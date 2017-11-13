/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PositionComponent } from './position/position.component';
import { SpyComponent } from './spy/spy.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [


  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'position',
    component: PositionComponent
  },
  {
    path: 'spy',
    component: SpyComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'nav',
    component:NavComponent
  },

  // {
  //   path: 'detail/:id',
  //   component: PositionTitleComponent
  // },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
