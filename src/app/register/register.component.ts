import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};
  constructor(public serviceObj: ProductService, public router: Router) { };
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form data:', form.value);
      this.serviceObj.addUser(form.value).subscribe(res => {
        alert('Signup Sucessfull');
        this.router.navigate(['login']);
      },
        err => {
          alert('Error in SignUp')
        });
    }
    else {
      alert('Please complete all the details')
    }
  }
  loginClick() {
    this.router.navigate(['login']);
  }
}

