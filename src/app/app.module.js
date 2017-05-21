"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var products_component_1 = require("./products.component");
var product_detail_component_1 = require("./product-detail.component");
var product_service_1 = require("./product.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([{
                    path: 'products',
                    component: products_component_1.ProductsComponent
                }])
        ],
        declarations: [app_component_1.AppComponent, products_component_1.ProductsComponent, product_detail_component_1.ProductDetailComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_service_1.ProductService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map