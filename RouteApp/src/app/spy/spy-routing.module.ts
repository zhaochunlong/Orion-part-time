/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpyDetailComponent } from '../spy-detail/spy-detail.component';



const routes: Routes = [
  {
    path:'spy_title',
    component:SpyDetailComponent
  },
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpyRoutingModule {}
