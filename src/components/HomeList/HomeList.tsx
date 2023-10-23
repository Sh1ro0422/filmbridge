/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { omdbApiCall, clone } from "../utilities/utility"
import Card from './dedKheseg/Card'
import Link from 'next/link'
let hoosonJagsaalt:any[] = []

function HomeList({title}:{title:string}) {
    const [state, setState] = React.useState(clone(hoosonJagsaalt))
    const qwerty = ['tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364']
    const mount = React.useRef(false)
    let dummyJagsaalt:any[] = []

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
    console.log(state)
    return <section className="container flex-col mx-auto mt-10 gap-4 h-fit">
        <div className='flex flex-row items-center justify-between mb-3 border-b-2 dark:border-gray-700'>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <Link href={`/film?status=${title}`}>
                <span className='cursor-pointer text-lg hover:underline'>more</span>
            </Link>
        </div>
        <div className='flex flex-row gap-2 overflow-x-auto overflow-y-hidden'>
            {
                state.map((x:any[] | object, i:number) => {
                    return <Card key={i} ugugdul={x} index={i}/>
                })
            }            
        </div>
    </section>
}

export default HomeList