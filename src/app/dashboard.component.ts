import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService
      .getProducts()
      .then(products => this.productList = products.slice(0, 4));
  }
}
