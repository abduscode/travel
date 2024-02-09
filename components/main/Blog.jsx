'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

export default function Blog({blog }) {
  return (
  <motion.div 
  initial = {{y: "100vh" , opacity : 0}}
  animate = {{y: 0 , opacity : 1 , transition : {delay: 1 , stiffness : 35}}}
  className='relative bg-white shadow-md hover:shadow-2xl rounded-lg overflow-hidden border border-gray-300'
  >
          <div className='relative h-48 w-full'>
            <Image src={blog.images[0]} alt='' fill objectFit="cover"/>
            <div className='relative bg-orange-600 rounded-md w-fit py-2 px-2 top-10 right-1'>
              <span className='text-white text-md'>{blog.date}</span>
            </div>
          </div>
          
          <div className='flex flex-col items-center px-10 py-5'>
            <p className='line-clamp-3 text-ellipsis pb-5 pt-2'>
              {blog.content}
            </p>
            
            <Link href={`/blog/${blog.slug}`} className={`pt-5 relative font-medium w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-slate-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-100 after:origin-left`}>
            
              Read more
            </Link>

          </div>
  </motion.div>
  )
}
