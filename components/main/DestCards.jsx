import Image from 'next/image';
import React from 'react';

export default function DestCards({item}) {
  return (
    <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="relative h-48 w-full">
      <Image src={item.image} alt={item.name} loading='lazy' layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <div className='flex justify-between items-center mb-2'>
        <h1 className="text-2xl font-semibold">{item.name}</h1>
        <div className='flex items-center gap-1'>
          <span className='font-medium'>{item.rating}</span>
          <svg width="13px" height="15px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M12.1904 2.64611C12.9026 1.09713 15.0974 1.09713 15.8096 2.64611L18.607 8.72957L25.2394 9.51836C26.9281 9.71921 27.6063 11.813 26.3578 12.9711L21.4543 17.5197L22.7559 24.0907C23.0874 25.7638 21.3118 27.0578 19.8279 26.2246L14 22.9523L8.17211 26.2246C6.6882 27.0578 4.91264 25.7638 5.24406 24.0907L6.54569 17.5197L1.64223 12.9711C0.3937 11.813 1.07191 9.71921 2.76065 9.51836L9.39298 8.72957L12.1904 2.64611ZM14.4543 4.4713C14.2758 4.08315 13.7242 4.08315 13.5457 4.4713L11.2026 9.56685C10.9123 10.1981 10.3159 10.6328 9.62762 10.7147L4.06902 11.3758C3.64578 11.4261 3.47555 11.949 3.78803 12.2388L7.89874 16.0521C8.40759 16.5241 8.63541 17.2274 8.50034 17.9093L7.40955 23.4159C7.32661 23.8346 7.77263 24.158 8.14481 23.949L13.0266 21.208C13.6314 20.8684 14.3686 20.8684 14.9734 21.208L19.8552 23.949C20.2274 24.158 20.6734 23.8346 20.5905 23.4159L19.4997 17.9093C19.3646 17.2274 19.5924 16.5241 20.1013 16.0521L24.212 12.2388C24.5244 11.949 24.3542 11.4261 23.931 11.3758L18.3724 10.7147C17.6841 10.6328 17.0877 10.1982 16.7974 9.56685L14.4543 4.4713Z" fill="#000000" fill-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <p className="text-gray-600">{item.shortDescription}</p>
    </div>
  </div>
  );
}
