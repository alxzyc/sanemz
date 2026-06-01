import { products } from '../data/products';
export const productService={list:async()=>products,byId:async(id:string)=>products.find((p)=>p.id===id)};
