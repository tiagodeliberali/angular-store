import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'my-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  selectedProduct: Product;
  productList: Product[];

  constructor(
    private productService: ProductService,
    private router: Router) {
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
