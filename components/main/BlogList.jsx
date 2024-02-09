import React from 'react'
import Blog from './Blog'
import { blogs } from '@/_data'

export default function BlogList() {

  const sortedblogs = blogs.sort((a,b) => b.date - a.date) 

  const blogData = sortedblogs.slice(0,4)

  return (
    <div className='py-10 px-5 md:px-16'>
        <div className='text-center pb-14 '>
            <h1 className='text-4xl font-semibold'><span className='text-slate-400 font-bold'>B</span>log</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              blogData.map((blog) => (
                <Blog key={blog.id} blog={blog}/>
              ))
            }
        </div>
    </div>
    
  ) 
}
