import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: any = " ";
  password: any = "";
  constructor(private router: Router, public objservice: ProductService) { }

  onSubmit() {
    if (this.objservice.login(this.name, this.password)) {
      alert('Login Successful');
      this.router.navigate(['items']);
    } else {
      alert('Login failed');
    }
  }
}
