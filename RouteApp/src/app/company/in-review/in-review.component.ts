import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router";
import {Router} from "@angular/router";

//导入服务
import {CompanyReviewService}from '../../services/company_review.service';
import {LocalStorage} from '../../services/localStorage.service';

@Component({
  selector: 'app-in-review',
  templateUrl: './in-review.component.html',
  styleUrls: ['./in-review.component.css'],
  providers:[CompanyReviewService,LocalStorage],
})
export class InReviewComponent implements OnInit {
  companyreviews:any;
  userID:any;

  constructor(
    private rev:CompanyReviewService,
    private router:Router,
    private route:ActivatedRoute,
    private loaclstorage:LocalStorage
  ) { }

  ngOnInit() {
    let that=this;
    // var user={};
    var user = that.loaclstorage.get('userId');
    var users=parseInt(user);
    this.userID={id:users};
    console.log(user+'我在in-review里');
    that.rev.getAllCompanyReviews(this.userID,function (result) {
      that.companyreviews=result;
      // console.log('到这了');

    })
  }

}
