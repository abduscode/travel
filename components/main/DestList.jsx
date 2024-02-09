import React from 'react'
import DestCards from './DestCards';

export default function DestList({data}) {

  const sortedData = data.sort((a, b) => b.rating - a.rating);
  data = sortedData.slice(0,4)

  return (
    <div className='px-5 py-14 md:px-16'>
        <div className='text-center pb-14 '>
            <h1 className='text-4xl font-semibold'><span className='text-slate-400 font-bold'>P</span>opular Destinations</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            data.map((item) => (
              <DestCards key={item.id} item={item} />
            ))

          }
        </div>
    </div>
  )
}
