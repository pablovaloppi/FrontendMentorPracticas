import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemService } from '../../service/cart-item.service';

@Component({
  selector: 'app-button-ad-to-cart',
  templateUrl: './button-add-to-cart.component.html',
  styleUrls: ['./button-add-to-cart.component.css'],
})
export class ButtonAdToCartComponent implements OnInit{

  @Output() increment: EventEmitter<void> = new EventEmitter();
  @Output() decrement: EventEmitter<void> = new EventEmitter();

  @Output() isInCart: EventEmitter<boolean> = new EventEmitter();
  
  @Input() idProduct:number = -1;

  isProductInCart = false;
  isRemoveItem = false;
  quantity: number = 1;

  constructor( private _cartItemService:CartItemService){}

  ngOnInit(): void {
    this._cartItemService.setInCart(this.idProduct, false);
    this._cartItemService.getInCart(this.idProduct)?.subscribe(value => {
      this.isProductInCart  &&= value;
      this.isInCart.emit(this.isProductInCart);
    })
  }

  addToCart() {
    this.isProductInCart = true;
    this.quantity = 1;
    this.isInCart.emit(this.isProductInCart);
    this.increment.emit();
    this._cartItemService.setInCart(this.idProduct, true);
  }

  incrementCount() {
    this.quantity++;
    this.increment.emit();
  }

  decrementCount() {
    this.quantity--;
    this.decrement.emit();
    if (this.quantity < 1) {
      this.isProductInCart = false;
      this._cartItemService.setInCart(this.idProduct,false);
      this.quantity = 1;
      this.isInCart.emit(this.isProductInCart);
    }
  }
}