import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/core/models/cartItem';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartList: CartItem[] = [];

  cartEmpty: boolean = this.cartList.length > 0;
  totalPrice: number = 4126.5;
  private _cartSubscription!: Subscription;
  modalOrderVisible = false; // false

  constructor(private _cartService: CartService) {}
  ngOnDestroy(): void {
    this._cartSubscription.unsubscribe();
  }
 
  ngOnInit(): void {
    this._cartSubscription = this._cartService
      .getTotalPrice()
      .subscribe((total) => (this.totalPrice = total));
    this.setCartList();
  }

  setCartList() {
    this._cartService.getAllItems().subscribe((value) => {
      this.cartList = value;
      this.cartEmpty = this.cartList.length > 0;
    });
  }

  openModal(){
    this.modalOrderVisible = true;
      document.body.style.overflow ='hidden';
  }
}
