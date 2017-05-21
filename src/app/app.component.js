"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PRODUCTS = [
    { id: 1, name: 'Ovo de Pascoa', price: 15.50 },
    { id: 2, name: 'Bolo de Festa', price: 25.30 },
    { id: 3, name: 'Tapete de Cozinha', price: 190.00 },
    { id: 4, name: 'Tapete de Banheiro', price: 120.00 }
];
var AppComponent = (function () {
    function AppComponent() {
        this.productList = PRODUCTS;
    }
    AppComponent.prototype.onSelect = function (product) {
        this.selectedProduct = product;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>Loja virtual</h1>\n    <h2>Lista de Produtos</h2>\n    <ul class=\"productList\">\n      <li *ngFor=\"let product of productList\" \n        (click)=\"onSelect(product)\" \n        [class.selected]=\"product === selectedProduct\">\n        <span class=\"badge\">{{product.id}}</span> {{product.name}}: {{product.price}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedProduct\">\n      <h2>{{selectedProduct.name}} details!</h2>\n      <div><label>id: </label>{{selectedProduct.id}}</div>\n      <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"selectedProduct.name\" placeholder=\"name\"/>\n      </div>\n      <div>\n          <label>price: </label>\n          <input [(ngModel)]=\"selectedProduct.price\" placeholder=\"price\"/>\n      </div>\n    </div>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=app.component.js.map