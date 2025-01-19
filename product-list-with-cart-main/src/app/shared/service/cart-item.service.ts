import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

   inCart:Map<number,BehaviorSubject<boolean>> = new Map();
  //private $_inCart:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  getInCart(id:number):Observable<boolean> | undefined{
    return this.inCart.get(id)?.asObservable();
  }

  setInCart(id:number,value:boolean){
    if(!this.inCart.has(id)){
      this.inCart.set(id, new BehaviorSubject(value));
    }else{
      this.inCart.get(id)!.next(value);
    }
  }

  removeItemCart(id:number){
    this.inCart.delete(id);
  }
}
