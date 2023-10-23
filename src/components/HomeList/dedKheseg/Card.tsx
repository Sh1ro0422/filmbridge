'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import MovieCard from '@/components/MovieCard/MovieCard'
interface Props {
    ugugdul:object,
    index:number
}

function randomTooAvya() {
    return Math.ceil(Math.random() * 30) * (Math.round(Math.random()) ? 1 : -1)
}

function Card(props:Props) {
    const { ugugdul, index } = props
    return <motion.div className='min-w-[185px] w-[185px] max-w-[185px]' transition={{type: 'tween', duration: 1}} initial={{opacity: 0}} whileInView={{ opacity: 1}}>
        <MovieCard ugugdul={ugugdul}/>
    </motion.div>
}

export default Card