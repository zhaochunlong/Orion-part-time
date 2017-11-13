import { Component, OnInit } from "@angular/core";
import { LocalStorage } from './../services/localStorage.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[LocalStorage]
})
export class NavComponent implements OnInit {

  constructor(
    private local: LocalStorage,
  ) { }

  ngOnInit() {

  }

}
