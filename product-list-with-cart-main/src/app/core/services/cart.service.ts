import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartList: CartItem[] = [];
  private $cartList: Subject<CartItem[]> = new Subject();

  private $totalPrice: BehaviorSubject<number> = new BehaviorSubject(0);

  private totalPriceCart = 0;
  constructor() {}

  getAllItems(): Observable<CartItem[]> {
    return this.$cartList.asObservable();
  }

  addItem(cartItem: CartItem) {
    let indexItem = this.getIndexProductInCart(cartItem.product);
    if (indexItem >= 0) {// Si esta el elemento en la lista
      this.cartList[indexItem].quiantity++;
    } else {
      this.cartList.push(cartItem);
    }
    this.updateList();
    this.addToTotal(cartItem.product.price);
  }

  removeItem(cartItem:CartItem){
    let index = this.getIndexProductInCart(cartItem.product);
    if(index >= 0){
      let quantity = this.cartList[index].quiantity--;
      if(quantity - 1 === 0){ // -1 porque se le asigna primero this.cartList[this.getIndexProductInCart(cartItem.product)].quiantity y luego se lo resta, entonces nunca llegaria a cero
        this.deleteItem(cartItem.product);
      } 

      this.removeFromTotal(cartItem.product.price);
    } 
  }

  deleteItem(product: Product) {
    let cartItem = this.cartList[this.getIndexProductInCart(product)]
    this.removeFromTotal( cartItem.product.price * cartItem.quiantity);
    this.cartList.splice(this.getIndexProductInCart(product), 1);
    this.updateList();
  }

  getTotalPrice(): Observable<number> {
    return this.$totalPrice.asObservable();
  }

  private updateList() {
    this.$cartList.next(this.cartList);
  }

  private addToTotal(value:number){
    this.totalPriceCart += value  ;
    this.$totalPrice.next(this.totalPriceCart);
  }
  private removeFromTotal(value: number){
    this.totalPriceCart -= value  ;
    this.$totalPrice.next(this.totalPriceCart);
  }

  private getIndexProductInCart(product: Product):number {
    return this.cartList.findIndex((item) => item.product.id === product.id);
  }
}
