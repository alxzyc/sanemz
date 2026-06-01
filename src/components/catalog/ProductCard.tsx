import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
export function ProductCard({product}:{product:Product}){const add=useCartStore((s)=>s.add);return <article className="reveal neon-card group overflow-hidden rounded-3xl p-3 transition hover:scale-[1.03] hover:shadow-cyan-400/20"><Link to={`/produto/${product.id}`} className="scan-effect block overflow-hidden rounded-2xl"><img src={product.image} alt={product.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"/><div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-transparent to-transparent opacity-80"/></Link><div className="p-3"><Badge>{product.badge}</Badge><h3 className="mt-3 text-2xl">{product.name}</h3><p className="text-sm text-slate-400">{product.category} • {product.material}</p><div className="mt-4 flex items-center justify-between"><span className="font-price text-xl text-pink-300">R$ {product.price.toFixed(2).replace('.',',')}</span><Button onClick={()=>add(product)} className="px-4 py-2"><ShoppingBag size={18}/></Button></div></div></article>}
