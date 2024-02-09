'use client'
import { faqs } from '@/_data'
import FAQ from '@/components/main/FAQ'
import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function About() {
  const [isClicked, setIsClicked] = useState(0)
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  return (
    <div>
      <div className='bg-green-500 text-center text-white font-semibold text-4xl md:text-6xl px-10 py-10'>
        <h1>About us</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-5 lg:px-16'>
        <div className="relative hidden lg:flex" style={{ paddingTop: '100%' }}>
          <Image
            src='https://images.pexels.com/photos/6829476/pexels-photo-6829476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col lg:flex-row gap-5 py-5'>
            <button
              onClick={() => setIsClicked(0)}
              className={`text-gray-500 focus:text-green-500 font-semibold py-2 px-5 hover:ease-in hover:transition hover:duration-300 ${isClicked === 0 ? 'text-green-500' : ''}`}
            >
              What we do
            </button>
            <button
              onClick={() => setIsClicked(1)}
              className={`text-gray-500 focus:text-green-500 font-semibold py-2 px-5 hover:ease-in hover:transition hover:duration-300 ${isClicked === 1 ? 'text-green-500' : ''}`}
            >
              Our mission
            </button>
            <button
              onClick={() => setIsClicked(2)}
              className={`text-gray-500 focus:text-green-500 font-semibold py-2 px-5 hover:ease-in hover:transition hover:duration-300 ${isClicked === 2 ? 'text-green-500' : ''}`}
            >
              Our goal
            </button>
          </div>
          <AnimatePresence mode='wait'>
            {(isClicked === 0 || isClicked === 1 || isClicked === 2) && (
              <motion.div
                key={isClicked}
                initial='closed'
                animate='open'
                exit='closed'
                variants={variants}
                transition={{ duration: 0.3 }}
                className=''
              >
                {isClicked === 0 && (
                  <>
                    <h2 className='text font-semibold text-xl py-2'>What we do ?</h2>
                    <p className='leading-loose'>
                      We specialize in providing cutting-edge solutions for businesses of all sizes. Our team of experts works tirelessly to deliver reliable hosting services that meet the unique needs of our clients. From website hosting to cloud solutions, we are committed to ensuring your online presence is secure, scalable, and optimized for success.
                    </p>
                  </>
                )}
                {isClicked === 1 && (
                  <>
                    <h2 className='text font-semibold text-xl py-2'>Our mission </h2>
                    <p className='leading-loose'>
                      At our core, our mission is to empower businesses through innovative technology solutions. We strive to be a trusted partner, guiding our clients towards digital success. By providing top-notch services and fostering a culture of collaboration, we aim to contribute to the growth and prosperity of the businesses we serve.
                    </p>
                  </>
                )}
                {isClicked === 2 && (
                  <>
                    <h2 className='text font-semibold text-xl py-2'>Our main goal </h2>
                    <p className='leading-loose'>
                      {"Our goal is to be a catalyst for your success. We are dedicated to helping you achieve your objectives by leveraging the latest technologies and industry best practices. Whether it's enhancing your online presence, improving efficiency through cloud solutions, or securing your digital assets, we are committed to being "}
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className='py-10 px-5 lg:px-16'>
        <div>
          <h1 className='text-4xl font-semibold text-center pb-10'><span className='text-green-500'>F</span>requently Ask Question</h1>
        </div>
        <div className='grid grid-cols-1 gap-5'>
          {faqs.map((faq) => (
            <FAQ key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  )
}
