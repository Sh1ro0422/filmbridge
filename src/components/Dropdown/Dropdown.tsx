'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const Dropdown = ({children, content}:{children:React.ReactNode, content:React.ReactNode}) => {
    return <div className='w-fit h-fit relative flex items-center justify-center'>
        {children}
        <AnimatePresence>
            <motion.div className='absolute'>
                
            </motion.div>
        </AnimatePresence>
    </div>
}

export default Dropdown