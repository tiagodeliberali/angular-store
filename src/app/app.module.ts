import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }           from './app.component';
import { ProductsComponent }      from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService }         from './product.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
        path: 'products',
        component: ProductsComponent
    }])
  ],
  declarations: [ AppComponent, ProductsComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})

export class AppModule { }
