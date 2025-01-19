import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/core/models/cartItem';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {
 
  @Input() isVisible: boolean = false;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  cartList:CartItem[] = [];
  totalPrice = 0;

  constructor(private _cartService:CartService){}

  ngOnInit(): void {
    this._cartService.getTotalPrice().subscribe(value =>{
      this.totalPrice = value;
    });
    this._cartService.getAllItems().subscribe(value =>{
      this.cartList = value;
    })
  }

  closeModal() {
    this.isVisible = false;
    if(!this.isVisible){
      document.body.style.overflow ='';

    }

    this.isVisibleChange.emit(this.isVisible); 
  }
}
