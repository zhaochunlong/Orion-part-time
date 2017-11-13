import { Component, OnInit } from '@angular/core';
import {PositionService} from "../../services/position.service";
import { LocalStorage } from '../../services/localStorage.service';
@Component({
  selector: 'app-user-join',
  templateUrl: './user-join.component.html',
  styleUrls: ['./user-join.component.css'],
  providers:[PositionService,LocalStorage]
})
export class UserJoinComponent implements OnInit {
  job:any;
  user:any;
  jobs=new Array();

  constructor(private ps:PositionService,
              private local:LocalStorage) { }

  ngOnInit() {
    let user = localStorage.getItem('userId');
    // console.log(user);
    let that = this;
    that.ps.getAllJobs(function (result) {
      that.job=result;
      // console.log(that.job[0].loginID);
      for(let i=0;i<that.job.length;i++) {
        if (that.job[i].loginID==user) {
          //console.log(that.job[i]);
          //that.jobs.push(that.job[i]);
          that.jobs.push(that.job[i]);
        }
      }
      // console.log("aa"+JSON.stringify(that.jobs));

      // console.log(that.job);
      // console.log('前端的job');

    })


  }

}
