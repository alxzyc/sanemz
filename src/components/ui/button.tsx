import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
type ButtonProps=ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'secondary'|'ghost'};
export function Button({children,className,variant='primary',...props}:PropsWithChildren<ButtonProps>){const variantClass=variant==='primary'?'btn-primary':variant==='secondary'?'btn-secondary':'bg-white/5 hover:bg-white/10';return <button className={twMerge('rounded-full px-6 py-3 font-bold transition duration-300 disabled:opacity-50',variantClass,className)} {...props}>{children}</button>}
