import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCartItemProductModule } from 'src/app/shared/components/order-cart-item-product/order-cart-item-product.module';
import { OrderConfirmedComponent } from './order-confirmed.component';



@NgModule({
  declarations: [
    OrderConfirmedComponent
  ],
  imports: [
    CommonModule,
    OrderCartItemProductModule
  ],
  exports:[
    OrderConfirmedComponent
  ]
})
export class OrderConfirmedModule { }
