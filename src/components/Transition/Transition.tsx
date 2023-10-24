'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Transition = ({children}:{children:React.ReactNode}) => {
    const variants = {
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -200 },
    }
    
    return <motion.main 
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit" 
        transition={{ type: 'linear', duration: 0.5 }}
        className=''
    >
        {children}
    </motion.main>
}

export default Transition