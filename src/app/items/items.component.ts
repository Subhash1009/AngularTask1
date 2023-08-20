import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {



  products: any[] = [];



  constructor(private productService: ProductService, private router: Router) { }



  ngOnInit(): void {

    this.productService.getProducts().subscribe(data => {

      this.products = data;

    });

  }



}

