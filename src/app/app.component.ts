import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router)
  {
    
  }
  title = 'Angular-Task1';

  btnLogin()
  {
    this.router.navigate(['login']);
  }

  btndash()
  {
    this.router.navigate(['dashboard']);
  }

}
