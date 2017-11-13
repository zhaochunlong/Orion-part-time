import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
//导入服务
import {PositionTitleService} from "../services/position_title.service";
import {ActivatedRoute,ParamMap} from "@angular/router";
import {PositionService} from "../services/position.service";



declare var $:any;

@Component({
  selector: 'app-position-title',
  templateUrl: './position-title.component.html',
  styleUrls: ['./position-title.component.css'],
  providers:[PositionTitleService,PositionService]

})
export class PositionTitleComponent implements OnInit {

  // positions:any;
  text: string = '';
  _position:any;
  ID:any;
  positions:any;
  loginId:any;
  position:any;

  constructor(private route: ActivatedRoute,
              private pts: PositionTitleService,
              private ps: PositionService,
              private router:Router) {
  }

  ngOnInit() {
    // let that=this;
    let ID = this.route.snapshot.paramMap.get('ID');
    // alert(ID);
    console.log("ID的值:"+ID);
    let that = this;
    that.ps.getPosutionsById(ID, function (position) {
      that._position=position[0];
      console.log("第一个 值:"+that._position);
      console.log("第二个 值:"+that._position.ID);
    })



    that.ps.getAllPositions(function (resulet) {
      that.positions=resulet.slice(0,8);
      console.log('这里是下面的循环2222-------------');
    })

  }


  toPositionDetails(ID){
    this.router.navigate(['/position_title',ID]);
    location.reload();
    setTimeout(function () {
      document.body.scrollTop!==0?document.body.scrollTop=0:null;
    }, 0)
  }

  baoming(userId) {
    console.log(userId);

    let user = localStorage.getItem('userId');
    this.loginId=parseInt(user);
    // console.log(typeof this.loginId);
    let that = this;
    this.position = [{id:userId,name:this.loginId}];
    console.log(this.position+'报名的数据');

    that.ps.getApply(that.position,function (result) {
      // alert(result.stateCode);
      if(result.stateCode==1){
        alert('申请成功');
      }else if(result.stateCode==2) {
        alert('请登录');
      }
    })
  }


}








