import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public location: Location, private router: Router) { }

  Logout() {


    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }

}
