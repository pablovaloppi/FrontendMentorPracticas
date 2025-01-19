import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemProductComponent } from './cart-item-product.component';



@NgModule({
  declarations: [
    CartItemProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartItemProductComponent
  ]
})
export class CartItemProductModule { }
