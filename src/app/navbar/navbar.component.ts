import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ROUTES = document.getElementById('routes');
    let link = ROUTES.getElementsByTagName('li');
    let anchor = ROUTES.getElementsByTagName('a');
    let current = window.location.pathname.split('/')[1];
    
    for (let i = 0; i < anchor.length; i++) {
      let active = anchor[i].href.split('/')[3];
      if(active == current) {
        link[i].className = "active";
     }
    }
  }

}
