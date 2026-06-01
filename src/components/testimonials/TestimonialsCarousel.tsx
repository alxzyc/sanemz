import { Star } from 'lucide-react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../../data/products';
import { Card } from '../ui/card';
export function TestimonialsCarousel(){return <section className="bg-[#1A1A2E]/60 px-4 py-20"><div className="mx-auto max-w-5xl"><h2 className="reveal mb-10 text-center text-5xl">Depoimentos</h2><Swiper modules={[Autoplay,EffectCoverflow]} effect="coverflow" autoplay={{delay:2600}} loop slidesPerView={1} breakpoints={{768:{slidesPerView:2}}}>{testimonials.map((t)=><SwiperSlide key={t.name}><Card className="m-4 min-h-72 text-center"><img src={t.photo} alt={t.name} className="mx-auto size-20 rounded-full object-cover ring-2 ring-pink-300"/><div className="mt-4 flex justify-center gap-1 text-yellow-300">{Array.from({length:5}).map((_,i)=><Star key={i} fill="currentColor" size={18}/>)}</div><p className="mt-4 text-slate-300">“{t.text}”</p><h3 className="mt-5 text-xl">{t.name}</h3></Card></SwiperSlide>)}</Swiper></div></section>}
