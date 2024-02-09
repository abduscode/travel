import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='py-10 px-5 md:px-10 bg-white '>
      <div className='border'></div>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='flex flex-col gap-1 py-10 md:px-10 px-5'>
          <h1 className='text-2xl'><b className='text-slate-400'>T</b>ravel.</h1>
          <p className='line-clamp-3 lg:w-96 w-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ab nobis, quo dignissimos incidunt nesciunt animi, eius, fuga voluptates consequatur illo assumenda expedita saepe obcaecati asperiores voluptatibus labore vitae quam!</p>
        </div>
        <div className='py-10 px-5 md:px-10'>
          <ul className='text-gray-500'>
            <li><b className='text-black'>Contact Infos</b></li>
            <li>70,Tangier,Morocoo</li>
            <li>Travel@info.com</li>
            <li>+212 778620120</li>
            <li>+212 569424752</li>
          </ul>
        </div>
        <div className='py-10 px-5 md:px-10'>
          <ul className='text-gray-500'>
            <li><b className='text-black'>Links</b></li>
            <li><Link href='/' className='hover:text-gray-700'>Home</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Services</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Blog</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>About</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Contact</Link></li>
          </ul>
        </div>
        <div className='py-10 px-5 md:px-10'>
          <ul className='text-gray-500'>
            <li><b className='text-black'>Socials</b></li>
            <li><Link href='/' className='hover:text-gray-700'>Facebook</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Instagram</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Twitter</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Whatsapp</Link></li>
            <li><Link href='/' className='hover:text-gray-700'>Pintrest</Link></li>
          </ul>
        </div>
      </div>
        <div className='border'></div>
        <div className='flex items-center justify-center flex-col pt-10'>
            <h2> Copyright © {new Date().getFullYear()} All rights reserved </h2>
        </div>
    </footer>
  )
}
