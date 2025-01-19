import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataJsonUrl = "../../../assets/data/data.json";

  constructor(private http:HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataJsonUrl);
  }
  getById(id: number): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  create(entity: Product): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  update(id: number, entity: Product): Observable<Product> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
