import { Product } from "./product";

export interface CartItem{
    id?:number;
    product:Product;
    quiantity:number;
}