import { Component, OnInit } from '@angular/core';
import { Site }    from './site';
import {CompanyService} from "../../services/company.service";

declare var $:any;
@Component({
  moduleId:module.id,
  selector: 'app-company-message',
  templateUrl: './company-message.component.html',
  styleUrls: ['./company-message.component.css'],
  providers:[CompanyService]
})
export class CompanyMessageComponent implements OnInit {
  recommends = [
                 {id:1,name:'IT互联网'},
                 {id:2,name:'制造'},
                 {id:3,name:'贸易/物流'},
                 {id:4,name:'建筑/房地产'},
                 {id:5,name:'金融'},
                 {id:6,name:'服务业'},
                 {id:7,name:'政府/事业单位'},
                 {id:8,name:'教育培训'},
                 {id:9,name:'文化传媒'},
                 {id:10,name:'企业服务'},
                ];
  model = new Site(1, '','百度', '赵春龙', this.recommends[0].id,'苏州', 'baidu', '苏州吴中区', '百度搜索引擎');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: 完成后移除
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  active = true;

  newSite() {
    this.model = new Site(10, '', '', '', '', '', '', '', '');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  constructor(private cs:CompanyService) {
  }

  ngOnInit() {
  }


  addcompany(model){
    let user = localStorage.getItem('userId');
    let that = this;
    model.userID=user;
    console.log(model);

    that.cs.addcompany(model,function (result) {

      if(result.stateCode==1){
        alert('公司信息提交成功');
        location.reload();
      }else if(result.stateCode==2){
        alert('公司信息修改成功');
      }else if(result.stateCode==7){
        alert('添加失败');
      }else if(result.stateCode==8){
        alert('e004');
      }
      else {
        alert('操作失败');
      }
    })


  }



}
