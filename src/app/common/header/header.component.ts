import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(action) {

    switch (action.toLowerCase()) {
      case 'about': {
        this.router.navigate(["about"]);
        break;
      }
      case 'contact': {
        this.router.navigate(["contact"]);
        break;
      }
      case 'register': {
        this.router.navigate(["register"]);
        break;
      }
      default: {
        this.router.navigate(["login"]);
        break;
      }

    }

  }

}
