import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/core/models/cartItem';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';
import { CartItemService } from '../../service/cart-item.service';

@Component({
  selector: 'app-cart-item-product',
  templateUrl: './cart-item-product.component.html',
  styleUrls: ['./cart-item-product.component.css']
})
export class CartItemProductComponent {
  @Input() cartItem!:CartItem;

  constructor( private _cartService:CartService,
    private _cartItemService:CartItemService
  ){}

  deleteItem(){
    this._cartService.deleteItem(this.cartItem.product);
    this._cartItemService.setInCart(this.cartItem.product.id,false);
  }
}
