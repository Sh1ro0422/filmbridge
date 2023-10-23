'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
interface Props {
    title:string,
    children:React.ReactNode,
    placement:string,
}

const Tooltip = (props:Props) => {
    const { title, placement='bottom' } = props
    const [hover, setHover] = React.useState(false)

    const position:object = {
        bottom: 'top-[calc(100%+5px)]',
        top: 'bottom-[calc(100%+5px)]',
        left: 'right-[calc(100%+5px)]',
        right: 'left-[calc(100%+5px)]'
    }

    return <div className='relative h-fit w-fit flex justify-center items-center' onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
        {props.children}
        <AnimatePresence>
            {
                hover && <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0}} className={`!absolute text-gray-100 z-auto p-2 rounded bg-gray-900 bg-opacity-75 backdrop-blur ${position[placement]}`}>
                    {title}
                </motion.div>
            }
        </AnimatePresence>
    </div>
}

export default Tooltip