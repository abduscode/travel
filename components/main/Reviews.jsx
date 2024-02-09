import React from 'react'

export default function Reviews() {
  return (
    <div className='px-5 md:px-16 py-10 bg-gray-100'>
        <div className='px-10 py-10 rounded-lg bg-white'>
        <div className='py-2'>
          <h1 className='text-4xl font-semibold text-center'><span className='text-slate-400 font-bold'>R</span>eviews</h1>
        </div>
        <div className='flex flex-col items-center py-2 px-2 md:px-10'>
          <p className='py-4 text-wrap text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit provident architecto libero minima exercitationem aspernatur
            ducimus animi dolorem quod perspiciatis! Est minima totam laborum 
          </p>
            <span>Joe doe , 01.20.2023</span>
        </div>
        </div>
    </div>
  )
}
