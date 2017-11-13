import { Component, OnInit } from '@angular/core';
import { Site }    from './site';
import {endTimeRange, startTimeRange} from '@angular/core/src/profile/wtf_impl';
import {PositionService} from "../../services/position.service";


@Component({
  moduleId:module.id,
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
  providers: [PositionService]
})
export class CompanyProfileComponent implements OnInit {

id:number;
name:string;
  urls=[{name:'热门',id:1},
        {name:'简单易做',id:2},
        {name:'跑腿办事',id:3},
        {name:'室内推荐',id:4},
        {name:'体力达人',id:5},
        {name:'专业技能',id:6},
        {name:'特色职位',id:7},
        {name:'优秀青年',id:8},
        {name:'优秀青年',id:9},];



  // tt=typs[0];
  // url = ['1','2','3','4','5','6','7','8','9'];
  salarys = ['10','20','50','100','200','500','1000','1000~2000','面议',];
  clearings = [   {name:'小时',id:1},
                  {name:'日结',id:2},
                  {name:'周结',id:3},
                  {name:'完工结',id:4},
                  {name:'半月结',id:5},
                  {name:'月结',id:6}];
  sexs = ['不限','男','女'];
  workingTime = ['半年','一年','三年','长期可做'];
  recommends = ['是','否'];
  model = new Site(1, '传单派发',20170101,20180101,'苏州',this.urls[0].id,10,this.salarys[0],this.clearings[0].id,this.sexs[0],this.recommends[0],'长期可做','请填写详细介绍');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;
  user:any;
  addposition:any;

  newSite() {
    this.model = new Site(10,'',20170901,20180101,'','',10,'','','','','','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  constructor(private ps:PositionService) { }

  ngOnInit() {
  }


  postJob(model){
    let user = localStorage.getItem('userId');
    let that = this;
   // console.log(model);

   model.userID=user;
   console.log(model);

    that.ps.postJob(model,function (result) {
      console.log(model+'这里是前台第二次');
      if(result.stateCode==6){
        location.reload();
        alert('发布成功');
      }else {
        alert('发布失败');
      }

    })


  }

}
