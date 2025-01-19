import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  image?: string = '';

  inCart: boolean = false;
  _lastQuantity: number = 0;

  screenWidth: number = window.innerWidth;

  constructor(
    private _cartService: CartService,
    private _renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    this.image = this.product.image?.mobile;
    this._renderer2.listen('window', 'resize', (event: UIEvent) => {
      this.screenWidth = (event.target as Window).innerWidth;
      this.selectImageForWidth(this.screenWidth);
    });
  }

  addItemInCart() {
    this._cartService.addItem({ product: this.product, quiantity: 1 });
  }

  removeItemInCart() {
    this._cartService.removeItem({ product: this.product, quiantity: 1 });
  }

  isInCart(value: boolean) {
    this.inCart = value;
  }

  private selectImageForWidth(width: number) {
    if (width <= 768 && this.image != this.product.image?.mobile) {
      this.image = this.product.image?.mobile;
    } else if (
      width >= 768 &&
      width < 1024 &&
      this.image != this.product.image?.tablet
    ) {
      this.image = this.product.image?.tablet;
    } else if (width >= 1024 && this.image != this.product.image?.desktop) {
      this.image = this.product.image?.desktop;
    }
  }
}
