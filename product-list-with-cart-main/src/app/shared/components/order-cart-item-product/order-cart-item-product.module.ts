import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCartItemProductComponent } from './order-cart-item-product.component';



@NgModule({
  declarations: [
    OrderCartItemProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrderCartItemProductComponent
  ]
})
export class OrderCartItemProductModule { }
