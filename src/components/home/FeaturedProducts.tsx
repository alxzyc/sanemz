import { products } from '../../data/products';
import { ProductCard } from '../catalog/ProductCard';
export function FeaturedProducts(){return <section className="mx-auto max-w-7xl px-4 py-20"><div className="reveal mb-10 flex items-end justify-between gap-4"><div><p className="font-heading uppercase tracking-[.3em] text-pink-300">Drop neon</p><h2 className="text-5xl">Produtos em destaque</h2></div></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0,6).map((p)=><ProductCard key={p.id} product={p}/>)}</div></section>}
