import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router";
import {Router} from "@angular/router";

//导入服务
import {PositionService} from "../services/position.service";
import { LocalStorage } from '../services/localStorage.service'
import {formArrayNameProvider} from "@angular/forms/src/directives/reactive_directives/form_group_name";
import {any} from "codelyzer/util/function";
@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
  providers:[PositionService,LocalStorage]
})
export class PositionComponent implements OnInit {
  positions:any;
  arr:any;//9-25
  userId:any;
  user:any;
  position:any;
  loginId:any;
  // aaa:any;
  // aaa=[{position:this.userId,userId:this.user}];

  constructor(private ps:PositionService,
              private router:Router,
              private route:ActivatedRoute,
              private local:LocalStorage) { }

  ngOnInit() {

    let that=this;

    that.ps.getAllPositions(function (resulet) {
      that.positions=resulet;
      that.arr=resulet;//9-25
      // console.log(that.positions);
      // console.log('这里是下面的循环-------------'+JSON.stringify(that.positions[1]));
    });




  }


  toPositionDetail(ID){
    // alert(ID);
    // console.log('hahahahahahah')
    this.router.navigate(['/position_title',ID]);
  }
  ////////9-25
  day(key){
    if(key.valueOf()=='不限')
    {
      this.arr=this.positions;
      return this.arr;
    }
    else{
      this.arr = this.positions.filter(function (item) {
        if (item.mode == key) {
          return item;
        }
      })
    }
  }

  sex1(key){
    if(key.valueOf()=='全部'){
      this.arr=this.positions;
      return this.arr;
    }
    else{
      this.arr = this.positions.filter(function (item) {
        if (item.sex == key) {
          return item;
        }
      })
    }
  }
  money(key){
    this.arr = this.positions.filter(function (item) {
      if (item.recommend == key) {
        return item;
      }
    })
  }

  pay(key){
    // console.log(key);
    for(let i=0;i<this.arr.length;i++)
    {
      this.arr.sort(function (a,b) {
        return  b.salary - a.salary ;
      })
    }
  }


  workplace1(key){
    // console.log(this.positions);
    if(key.valueOf()=='不限')
    {
      this.arr=this.positions;
      return this.arr;
    }
    else{
      this.arr = this.positions.filter(function (item) {
        if (item.workplace== key) {
          return item;
        }
      })
    }
  }

  jobtype(key){
    // console.log(key);
    // console.log(this.positions);
    this.arr = this.positions.filter(function (item) {
      if (item.position== key) {
        return item;
      }
    })
  }




  baoming(userId) {

    let user = localStorage.getItem('userId');
    this.loginId=parseInt(user);
    // console.log(typeof this.loginId);
    let that = this;
    this.position = [{id:userId,name:this.loginId}];

    that.ps.getApply(that.position,function (result) {
      // alert(result.stateCode);
      if(result.stateCode==1){
        alert('申请成功');
      }else if(result.stateCode==2) {
        alert('请登录');
      }else if(result.stateCode==3){
        alert('请去完善信息');
      }
    })
  }

}
