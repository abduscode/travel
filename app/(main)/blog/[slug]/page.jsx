import { blogs } from '@/_data'
import CommentList from '@/components/main/CommentList'
import Image from 'next/image'
import React from 'react'

export default function SingleBlog({params}) {
  const blog = blogs.find((blog) => blog.slug == params.slug)
  return (
    <div>
      <div className='bg-purple-600 text-white font-semibold text-4xl md:text-6xl text-center py-10 px-10'>
        <h1>{blog.title}</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 pt-10 md:pt-20 lg:px-10 md:px-3'>
        <div className='col-span-2 px-5 md:p-10 flex flex-col gap-3'>
          <div className=''>
          <h1 className='text-4xl pb-5'>{blog.title}</h1>
          
          <p className='leading-loose'>
            {blog.content}
          </p>
          </div>

        <CommentList blog={blog}/>
        </div>
        <div className='col-span-1 hidden md:flex flex-col py-11 gap-4 px-5'>
       
          {blog.images.map((path, index) => 
           <div key={index} className="relative h-0 flex flex-row gap-3" style={{ paddingTop: '100%' }}>
                <Image
                  src={path}
                  alt=''
                  layout="fill"
                  objectFit="cover"
                />
            </div>
          )}        
        
      </div>



      </div>
    </div>
  )
}
