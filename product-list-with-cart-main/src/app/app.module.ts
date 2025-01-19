import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderCartItemProductModule } from "./shared/components/order-cart-item-product/order-cart-item-product.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    OrderCartItemProductModule,
    BrowserAnimationsModule
],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
