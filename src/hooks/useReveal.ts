import { useEffect } from 'react';
export function useReveal(){useEffect(()=>{const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');}}),{threshold:.14});const nodes=document.querySelectorAll('.reveal,.scan-effect');nodes.forEach((node)=>observer.observe(node));return()=>observer.disconnect();},[])}
