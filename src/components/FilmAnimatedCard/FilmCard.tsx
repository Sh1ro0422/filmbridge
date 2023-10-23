'use client'
import React from 'react'
import { motion } from 'framer-motion'
import MovieCard from '../MovieCard/MovieCard'
interface Props {
    ugugdul:object,
}

const FilmCard = (props:Props) => {
    const { ugugdul } = props
    return <motion.div className='w-full h-fit' transition={{type: 'tween', duration: 1}} initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <MovieCard ugugdul={ugugdul}/>
    </motion.div>
}

export default FilmCard