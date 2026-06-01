import { Clock, Cpu, Gem, Headphones, type LucideIcon } from 'lucide-react';
import { Card } from '../ui/card';
const items:[string,LucideIcon][]=[['Entrega Rápida',Clock],['Retopologia Inteligente',Cpu],['Materiais Premium',Gem],['Atendimento Personalizado',Headphones]];
export function Differentials(){return <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 md:grid-cols-4">{items.map(([name,Icon])=><Card key={name} className="reveal"><Icon className="mb-4 text-orange-300"/><h3 className="text-xl">{name}</h3><p className="mt-2 text-sm text-slate-400">Processo profissional, comunicação clara e acabamento orientado a colecionadores.</p></Card>)}</section>}
