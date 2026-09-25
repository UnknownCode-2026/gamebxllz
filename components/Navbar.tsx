'use client';
import { useState } from 'react';
const links = [['about','เกี่ยวกับฉัน'],['skills','ทักษะ'],['projects','ผลงาน'],['services','บริการ'],['contact','ติดต่อ']];
export default function Navbar() {
 const [open,setOpen] = useState(false);
 return <header className="header"><nav className="nav wrap" aria-label="เมนูหลัก"><a href="#home" className="brand" aria-label="Anuthit Kalachak หน้าแรก">AK<span>.</span></a><span className="nav-caption">ANUTHIT KALACHAK</span><button className="menu-toggle" aria-expanded={open} aria-controls="main-menu" onClick={()=>setOpen(!open)}>{open?'ปิดเมนู ✕':'เมนู ☰'}</button><div id="main-menu" className={`nav-links ${open?'is-open':''}`} onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{links.map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>คุยเรื่องโปรเจกต์ ↗</a></div></nav></header>;
}
