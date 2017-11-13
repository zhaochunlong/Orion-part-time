/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SpyComponent} from './spy.component';


//导入路由模块
import {SpyRoutingModule} from './spy-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SpyRoutingModule
  ],
  providers: [],
  bootstrap: [SpyComponent]
})
export class SpyModule { }
