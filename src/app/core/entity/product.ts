import { Category } from "./category"
import { ProductType } from "./product-type"

export interface Product{
    title:string
    description:string
    images:string[]
    type:ProductType
    category:Category[]
    price:number
    discount:number;
}