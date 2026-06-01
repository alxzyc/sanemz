import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
const base='w-full rounded-2xl border border-purple-400/30 bg-[#161626]/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20';
export function Input({className,...props}:InputHTMLAttributes<HTMLInputElement>){return <input className={twMerge(base,className)} {...props}/>}
export function Textarea({className,...props}:TextareaHTMLAttributes<HTMLTextAreaElement>){return <textarea className={twMerge(base,'min-h-32',className)} {...props}/>}
