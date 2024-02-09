'use client'
import { AnimatePresence, motion } from 'framer-motion'


export default function Template({ children }) {
  return (
    <AnimatePresence>
    <motion.main
    initial = {{opacity : 0 , x : "100vw" }}
    animate = {{
        opacity : 1,
        x : 0,
        transition : {
            delay : 0.25,
            duration : 0.5
        }
    }}
    exit = {{
        opacity : 0, 
        x : "-100vw",
        transition : {
            delay : 1,
            duration : 0.5,
            ease: 'easeInOut',
        }
    }}
      key="LandingPage"
    >
      {children}
    </motion.main>
    </AnimatePresence>

  )
}
