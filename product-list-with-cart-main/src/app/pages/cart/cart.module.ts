import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemProductModule } from 'src/app/shared/components/cart-item-product/cart-item-product.module';
import { OrderConfirmedModule } from '../../shared/components/order-confirmed/order-confirmed.module';




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartItemProductModule,
    OrderConfirmedModule
],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
