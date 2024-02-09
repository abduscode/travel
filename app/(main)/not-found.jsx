import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='bg-gray-100 py-48'>
       <div className='flex flex-col items-center justify-between'>
            <h1 className='text-2xl text-slate-600'>This Page Not Found</h1>
            <div className='flex flex-row py-10 justify-center items-center'>
                <p className='text-md pr-5'>Go back to the home page</p>
                <button className='text-slate-600 hover:text-slate-500'><b><Link href='/'>Go Home</Link></b></button>
            </div>
       </div>
    </div>
  )
}
