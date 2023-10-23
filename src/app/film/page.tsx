/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { MovieCard, omdbApiCall, Durs, isNullOrUndefined, FilmCard } from '@/components';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes';
let dummyJagsaalt: any[] | ((prevState: never[]) => never[]) = []
const Movies = (props: any) => {
    const [state, setState] = React.useState([])
    const params = useSearchParams()
    const qwerty = ['tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364',
    'tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364',
    'tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364',
    'tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364']
    const mount = React.useRef(false)
    const { theme } = useTheme()

    React.useEffect(() => {
        const controller = new AbortController
        
        if(!mount.current) {
            dummyJagsaalt = []
            mount.current = true
            test(0)
        }

        return () => {
            controller.abort()
        }
    }, [])

    function test(index:number) {
        if(index < qwerty.length) {
            omdbApiCall(qwerty[index]).then(result => {
                const cloneResult = JSON.parse(JSON.stringify(result))
                dummyJagsaalt.push(cloneResult)
            }).finally(() => {
                test(index + 1)
            })
        } else {
            setState(dummyJagsaalt)
        }
    }
    const tabs = [
        {
            ner: 'All',
            khoch: 'All',
            icon: 'ic:outline-movie-filter'
        },
        {
            ner: 'In Theater',
            khoch: 'In Theater',
            icon: 'bx:camera-movie'
        },
        {
            ner: 'Upcoming',
            khoch: 'Upcoming',
            icon: 'ic:outline-movie-filter'
        },
        {
            ner: 'Available Online',
            khoch: 'Available Online',
            icon: 'ic:outline-movie-filter'
        },
    ]

    // as={`/movie/${x['imdbID']}`}
    return <div className='container mx-auto px-4 flex flex-col mt-20 gap-2'>
        <div className='w-full bg-gray-200 dark:bg-[#333333] rounded flex flex-col p-2 px-6 select-none'>
            <div className='flex flex-row items-center w-full gap-2'>
                    {
                        tabs.map((x, i) => {
                            return <Link key={i} href={x.ner === 'All'? "?" : `?status=${x.ner}`}>
                                <motion.div
                                    initial={false} 
                                    className='text-[1.5rem] relative cursor-pointer px-4 ease-out py-1 gap-2 flex flex-row items-center text-[#333333] hover:text-[#555555] dark:text-gray-100 dark:hover:text-gray-300 transition-all'
                                >
                                    <Durs icon={x.icon} className='z-10'/>
                                    <span className='text-base z-10 '>{x.ner}</span>
                                    <AnimatePresence>
                                        {(isNullOrUndefined(params.get('status') ) ? 'All' === x.khoch : params.get('status') === x.khoch) && <motion.div transition={{duration: 0.2}} className='absolute rounded bg-[#d3d3d3] z-[5] dark:bg-[#555555] left-0 w-full h-full top-0' layoutId='filmtype' /> }
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        })
                    }
            </div>
        </div>
        <div className='w-full h-fit grid gap-5 grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 '>
            {
                state.map((x, i) => {
                    return <Link key={i} href={`/film/${x['imdbID']}`}><FilmCard ugugdul={x}/></Link>
                })
            }
        </div>
    </div>
}

export default Movies