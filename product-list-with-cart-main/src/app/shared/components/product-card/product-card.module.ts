import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ButonAddToCartModule } from '../button-add-to-cart/button-add-to-cart.module';



@NgModule({
  declarations: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    ButonAddToCartModule,
  ],
  exports:[ 
   ProductCardComponent
  ]
})
export class ProductCardModule { }
