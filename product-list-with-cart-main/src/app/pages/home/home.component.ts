import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  productList:Product[] = []

  constructor(private _productService:ProductService) {}

  ngOnInit(): void {
    this.setProductList();
    
  }

  setProductList(){
    this._productService.getAll().subscribe(value => {
      this.productList = value;
    })
  }
}
