"use client"
import { blogs } from '@/_data'
import Blog   from '@/components/main/Blog'
import {motion} from 'framer-motion'

export default function BlogPage({searchParams}) {

  const page  =parseInt(searchParams)

  return (
    <div className='pb-5'>
      <div className='bg-orange-500 text-white text-center text-4xl md:text-6xl font-bold py-10 '>
        <h1>Blog</h1>
      </div>
      <motion.div 
      animate={{
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }}
      className='grid gap-6 py-16 px-5 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:py-16 md:px-16'
      >
        {
          blogs.map((blog) => (
            <Blog key={blog.id} page={page} blog={blog}/> 
          ))
        }
      </motion.div>
    </div>
  )
}
