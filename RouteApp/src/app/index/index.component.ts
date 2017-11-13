import { Component, OnInit } from '@angular/core';
import { LocalStorage } from './../services/localStorage.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[LocalStorage]
})
export class IndexComponent implements OnInit {
  isShow = true;
  constructor(
    private local: LocalStorage,
  ) { }

  ngOnInit() {

  }
  change():void{
    this.isShow = false;
  }
}
