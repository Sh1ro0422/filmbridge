/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from "react"
import PropTypes from 'prop-types'
import Image from 'next/image'
import Durs from '../Durs/Durs'
import { defaultZurgiinKhemjeegeerHeightBodyo, isNullOrUndefined, trailerApiCall, trailerUzye } from '@/components'
import { motion } from 'framer-motion'
interface Props {
    key: any;
    id:any;
    ugugdul: any;
}



const MovieCard = (props: Props) => {
    const { ugugdul } = props
    const cardRef:any = React.useRef()
    const mount = React.useRef(false)
    const [hover, setHover] = React.useState(false)
    React.useEffect(() => {
        const controller = new AbortController()
        if(!mount.current) {
            mount.current = true
            cardniiKhemjeeUurchlugdukhud()
        }
        return () => {
            controller.abort()
        }
    })

    React.useEffect(() => {
        window.addEventListener('resize', cardniiKhemjeeUurchlugdukhud)
        return () => {
            window.removeEventListener('resize', cardniiKhemjeeUurchlugdukhud)
        }
    }, [])

    function cardniiKhemjeeUurchlugdukhud () {
        const card = cardRef.current
        if(isNullOrUndefined(card)) return
        card!.style.height = `${defaultZurgiinKhemjeegeerHeightBodyo(card!.clientWidth)}px`
    }

    const trailerClick = (e:any) => {
        e.preventDefault()
        e.stopPropagation()
        // trailerUzye(ugugdul)
        // trailerApiCall(ugugdul['imdbID']).then(result => {
        //     console.log('trailer ====>', result)
        // })
    }
    // ugugdul['Title']
    return <motion.div id='movieCard' layoutId="film-card" className={`w-full relative h-fit bg-[#fff] dark:bg-[#333333] cursor-pointer hover:shadow-md rounded-sm`} whileHover={{opacity:0.8}}>
        <div ref={cardRef} id={`Poster-${ugugdul.Title}`} className={`poster w-full relative transition-all`}>
            <div className="absolute p-1 top-1 left-1 bg-gray-800 text-gray-100 bg-opacity-70 backdrop-blur-md z-[80] text-xs rounded-sm">
                {ugugdul['Rated']}
            </div>
            <Image loading="eager" src={ugugdul['Poster']} priority fill alt={`asdawd`} style={{objectFit: 'cover'}} quality={100} className="rounded-sm !relative" blurDataURL={ugugdul['Poster']}/>
        </div>
        <div id='mask' className="relative w-full bottom-0 z-50 flex flex-col transition-all p-2 h-fit backdrop-blur-sm py-3 gap-2">
            <div className={`font-bold hover:underline line-clamp-2 h-[40px] text-sm`}>{ugugdul['Title']}</div>
            <button className={`flex w-full justify-center hover:bg-[] dark:hover:bg-[#444444aa] px-2 py-1 rounded-md`} onClick={(e) => {trailerClick(e)}}>
                <Durs icon='entypo-social:youtube' className='mr-2' style={{fontSize: 24}} />
                Trailer
            </button>
        </div>
    </motion.div> 
}

MovieCard.propTypes = {
    key: PropTypes.any,
    id: PropTypes.any,
    ugugdul: PropTypes.object.isRequired
}

export default MovieCard