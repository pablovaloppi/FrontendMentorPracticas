import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/core/models/cartItem';

@Component({
  selector: 'app-order-cart-item-product',
  templateUrl: './order-cart-item-product.component.html',
  styleUrls: ['./order-cart-item-product.component.css']
})
export class OrderCartItemProductComponent {
  @Input() cartItem!:CartItem;
}
