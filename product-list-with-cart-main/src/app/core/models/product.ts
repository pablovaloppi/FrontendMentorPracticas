import { Image } from "./image";
export interface Product{
    id:number;
    name:string;
    category:string
    image?:Image;
    price:number;
}