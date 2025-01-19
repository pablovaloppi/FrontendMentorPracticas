import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';
import { HomeComponent } from './home.component';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule,
    CartModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
