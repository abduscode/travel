'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function DiscoverDest({ place }) {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ 
        x: 0,
        transition : {
          delay : 0.5,
          duration : 0.5
        }
      }} 
      transition={{ type: "spring", stiffness: 10 }}
      key={place.id}
      className='relative bg-white shadow-md hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden border border-gray-300'
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay : 1.2 ,  duration: 0.5 }} // You can adjust the duration as needed
        className='relative h-64 lg:h-48 w-full'
      >
        <Image src={place.image} alt='' fill objectFit="cover" />
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className='flex flex-col items-start gap-4 px-10 py-5'
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className='flex flex-row justify-between w-full'
        >
          <h2 className='font-semibold'>{place.name}</h2>
          <span className='font-bold text-violet-500'>{place.cost}<span>$</span></span>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p>{place.shortDescription}</p>
        </motion.div>
        <div className='border border-gray-200 w-full'></div>
        <Link href="#" className='bg-violet-500 text-white font-semibold rounded-full px-3 py-2 hover:bg-violet-700'>Discover</Link>
      </motion.div>
    </motion.div>
  );
}
