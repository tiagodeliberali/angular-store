import { Component } from '@angular/core';

const PRODUCTS: Product[] = [
  { id: 1, name: 'Ovo de Pascoa', price: 15.50 },
  { id: 2, name: 'Bolo de Festa', price: 25.30 },
  { id: 3, name: 'Tapete de Cozinha', price: 190.00 },
  { id: 4, name: 'Tapete de Banheiro', price: 120.00 }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>Loja virtual</h1>
    <h2>Lista de Produtos</h2>
    <ul class="productList">
      <li *ngFor="let product of productList" 
        (click)="onSelect(product)" 
        [class.selected]="product === selectedProduct">
        <span class="badge">{{product.id}}</span> {{product.name}}: {{product.price}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <h2>{{selectedProduct.name}} details!</h2>
      <div><label>id: </label>{{selectedProduct.id}}</div>
      <div>
          <label>name: </label>
          <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
      </div>
      <div>
          <label>price: </label>
          <input [(ngModel)]="selectedProduct.price" placeholder="price"/>
      </div>
    </div>
  `,
})

export class AppComponent {
  selectedProduct: Product;
  productList = PRODUCTS;

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}

export class Product {
  id: number;
  name: string;
  price: number;
}