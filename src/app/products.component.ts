import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-products',
  template: `
    <h2>Lista de Produtos</h2>
    <ul class="productList">
      <li *ngFor="let product of productList" 
        (click)="onSelect(product)" 
        [class.selected]="product === selectedProduct">
        <span class="badge">{{product.id}}</span> {{product.name}}: {{product.price}}
      </li>
    </ul>
    <product-detail [product]="selectedProduct"></product-detail>
  `
})

export class ProductsComponent implements OnInit {
  selectedProduct: Product;
  productList: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => this.productList = products);
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
