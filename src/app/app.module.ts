import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }           from './app.component';
import { ProductsComponent }      from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService }         from './product.service';
import { DashboardComponent }     from './dashboard.component';
import { AppRoutingModule }       from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService ]
})

export class AppModule { }
