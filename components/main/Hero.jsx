"use client"
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ data }) => {

  const urls = data.map((item) => ({url : item.image , name: item.name}))
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount

  }, [urls]);

  return (
    <div className='overflow-hidden'>
      <div className="relative h-screen">
        <AnimatePresence>
          <motion.div
            key={urls[currentIndex].url}
            className="absolute inset-0 z-0 overflow-hidden blur-[1px] shadow-sm"
            initial={{ x: '100vw' }}
            animate={{ x: 0, transition: { delay: 0.3, ease: 'linear' } }}
            exit={{ x: '-100vw', transition: { ease: 'linear' } }}
          >
            <Image src={urls[currentIndex].url} alt='' loading='lazy' objectFit='cover' layout="fill" />
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center h-full text-white relative z-20">
          <AnimatePresence mode='sync'>
            <div
              className="flex flex-col items-center justify-center"
            >
              <motion.h1 
              className="text-6xl md:text-8xl font-semibold text-center"
              key={urls[currentIndex].name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >{urls[currentIndex].name}
              </motion.h1>
              <Link href="/destination" className="px-6 py-3 mt-4 bg-slate-600 hover:bg-slate-700 rounded-full text-white text-lg font-semibold hover:shadow-md transition duration-300 ease-out">
                Explore
              </Link>
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Hero;


