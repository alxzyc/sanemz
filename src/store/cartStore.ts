import { create } from 'zustand';
import type { Product } from '../data/products';
type CartState={items:Product[];add:(p:Product)=>void;clear:()=>void};
export const useCartStore=create<CartState>((set)=>({items:[],add:(p)=>set((s)=>({items:[...s.items,p]})),clear:()=>set({items:[]})}));
