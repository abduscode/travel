'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function NavBar() {

  const [open , setOpen] = useState(false);
  const path = usePathname()
  return (
    <nav className='md:px-10 '>
    <div className="flex flex-row items-center justify-between px-5 py-5">
    <div className="flex flex-row items-center justify-between">
        <Link href="/" className='text-2xl'><b className='text-slate-400'>T</b>ravel.</Link>
    </div>
    <div className='flex flex-row items-center justify-between md:hidden'>
       <div 
       className='flex flex-col space-y-1 justify-center items-end hover:cursor-pointer hover:border-slate-500'
       onClick={() => setOpen(!open)}
       >
          <div className='border border-black w-5'></div>
          <div className='border border-black w-5'></div>
          <div className='border border-black w-3'></div>
       </div>
       {open && (
        <div 
        className='h-auto w-screen flex flex-col items-center  
        absolute top-16 py-5 px-5 bg-gray-100 border border-gray-300 left-0 right-0 z-50
        '
        >
          <Link href="/" className={`py-2 hover:text-slate-400 ${path == "/" && "text-slate-400 font-semibold"}`} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/destination" className={`py-2 hover:text-slate-400 ${path == "/destination" && "text-slate-400 font-semibold"}`} onClick={() => setOpen(false)}>Destination</Link>
          <Link href="/blog" className={`py-2 hover:text-slate-400 ${path == "/blog" && "text-slate-400 font-semibold"}`} onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/about" className={`py-2 hover:text-slate-400 ${path == "/about" && "text-slate-400 font-semibold"}`} onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className={`py-2 hover:text-slate-400 ${path == "/contact" && "text-slate-400 font-semibold"}`} onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
    <ul className="hidden md:flex flex-row items-center justify-between gap-3">
        <Link href="/" className={`px-2 py-2 hover:text-slate-400 ${path == "/" && "text-slate-400 font-semibold"}`}>Home</Link>
        <Link href="/destination" className={`px-2 py-2 hover:text-slate-400 ${path == "/destination" && "text-slate-400 font-semibold"}`}>Destination</Link>
        <Link href="/blog" className={`px-2 py-2 hover:text-slate-400 ${path == "/blog" && "text-slate-400 font-semibold"}`}>Blog</Link>
        <Link href="/about" className={`px-2 py-2 hover:text-slate-400 ${path == "/about" && "text-slate-400 font-semibold"}`}>About</Link>
        <Link href="/contact" className={`px-2 py-2 hover:text-slate-400 ${path == "/contact" && "text-slate-400 font-semibold"}`}>Contact</Link>
    </ul>
    </div> 
    </nav>
  )
}
