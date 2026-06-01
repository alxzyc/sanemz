import type { HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
export function Card({children,className,...props}:PropsWithChildren<HTMLAttributes<HTMLDivElement>>){return <div className={twMerge('neon-card rounded-3xl p-6',className)} {...props}>{children}</div>}
