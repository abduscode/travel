'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function FAQ({faq}) {
  const [open, setOpen] = useState(false);
  const variants = {
    open: { opacity: 1, height: 'auto', marginTop: 0 },
    closed: { opacity: 0, height: 0, marginTop: '-10px' },
  }

  return (
    <div className=''>
      <div className='bg-gray-100 flex flex-row justify-between border font-semibold border-gray-400 px-8 py-5'>
        <Link className='' href='/'>{faq.question}</Link>
        <span className='rounded-full bg-green-500 flex items-center cursor-pointer' onClick={() => setOpen(!open)}>
          {open ? <Image src="/images/moin.png" alt='' width={24} height={20} /> : <Image src="/images/plus.png" alt='' width={24} height={20} />}
        </span>
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            key="content"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <div className='bg-gray-100 border border-gray-400 border-t-0 px-8 py-5 '>
              <p>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
