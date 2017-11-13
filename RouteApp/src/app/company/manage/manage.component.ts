import { Component, OnInit } from '@angular/core';

//导入服务
import { LocalStorage } from './../../services/localStorage.service'

declare var $:any;
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers:[LocalStorage]
})
export class ManageComponent implements OnInit {

  private num = 3;
  changeElementOne(): void {
    this.num=0;
  }
  changeElementTwo():void{
    this.num=1;
  }

  userId:any;
  companyurl:any;
  position:any;

  constructor(private local:LocalStorage) { }

  ngOnInit() {
    this.userId=this.local.get('userId');
    let that = this;
    function getUserCompany(){
      if(that.userId){
        $.ajax({
          type: 'post',
          url: 'http://localhost:3000/users/getUserCompany',
          data: {"userId":that.userId},
          dataType:'json',
          contentType: "application/x-www-form-urlencoded; charset=utf-8",
          success: function (result) {

            that.position=result.slice(0,5);
            console.log(that.position);
          },

          error: function (err) {
            alert('error'+err.message);
          }
        })
      }else{
        // location.href='./login.html';
        // alert("login去！！！！！！！！！！！！");
      }
    }
    getUserCompany();


  }

}
