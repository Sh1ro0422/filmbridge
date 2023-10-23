'use client' 
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
interface Props {
    title:string,
    url:string,
    hover:any,
    setHover:Function
}

const MenuItem = (props:Props) => {

    return <Link href={props.url} className="w-fit group h-full px-4 py-2 flex relative items-center justify-center cursor-pointer" onMouseEnter={() => {props.setHover(props.url)}}>
        {props.title}
        {props.hover === props.url && <motion.div layoutId='tses' transition={{type:'tween', duration: 0.3}} className={'absolute bottom-0 h-[2px] bg-sky-700 w-full'}/>}
    </Link>
}

export default MenuItem