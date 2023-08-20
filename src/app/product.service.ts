import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductService {



  apiUrl = 'http://localhost:3000/products';
  url1: any = 'http://localhost:3000/Login';





  constructor(private http: HttpClient, public router: Router) {
    this.loadData()
  }

  dataArray: any[] = [];
  private loadData() {
    this.http.get<any[]>(this.url1).subscribe(
      (data) => {
        this.dataArray = data;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
  login(name: string, password: string): boolean {
    console.log(name, password);
    //console.log(this.dataArray);
    const user = this.dataArray.find(u => u.fullName === name && u.password === password);
    console.log(user)
    if (user) {
      // if(user.role == 'admin')
      // {
      //   this.router.navigate([''])
      // }
      return true;
    }
    return false;
  }
  addUser(user: any): Observable<any> {
    console.log(user)
    return this.http.post<any>(this.url1, user);
  }

  getProducts(): Observable<any> {

    return this.http.get<any[]>(this.apiUrl);
  }

}
