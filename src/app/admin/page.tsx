/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import zurag from '../../../public/poster.jpg'
import {Input} from '@/components/index'
import { useNewtrelt } from '../NewtreltContext'
import { useRouter } from 'next/navigation'
import { Khuleelge, Transition } from '@/components'
export default function Page() {
    const router = useRouter()
    const [loader, setLoader] = React.useState(true)
    const { user, passwordUserNameAvya, newtrekhUtga, newtrekhDarya } = useNewtrelt()

    React.useEffect(() => {
        if(user?.loggedIn) {
            router.push('/')
        } else {
            setLoader(false)
        }
    }, [user])

    return <Transition>
        {
            loader ? <Khuleelge/> : <div className="left-0 top-0 w-screen h-screen bg-fixed bg-cover relative flex justify-center items-center overflow-hidden" style={{background: `url(${zurag.src})`}}>
                <div className='absolute z-10 bg-black bg-opacity-70 w-full h-full left-0 top-0'/>
                <div className=' absolute w-full h-full z-10 rounded-full !shadow-[inset_0_0_75px_75px_rgba(0,0,0,1)] sm:!shadow-[inset_0_0_100px_100px_rgba(0,0,0,1)] md:!shadow-[inset_0_0_200px_200px_rgba(0,0,0,1)] 2xl:!shadow-[inset_0_0_300px_300px_rgba(0,0,0,1)]' style={{scale: '1.3'}}/>
                <div className='absolute w-[300px] flex flex-col gap-3 h-[300px] px-10 bg-black rounded z-30 bg-opacity-40 backdrop-blur-sm backdrop-brightness-20 backdrop-hue-rotate-30 backdrop-saturate-50 backdrop-brightness-30 items-center justify-center'>
                    <h2 className='text-2xl font-bold text-white z-30'>Нэвтрэх</h2>
                    <Input inputClass='text-lg' className='' style={{}} type='text' onChange={(utga:any) => {passwordUserNameAvya(utga, 'userName')}} placeholder='Username' value={newtrekhUtga.userName}/>
                    <Input inputClass='text-lg' className='' style={{}} type="password" onChange={(utga:any) => {passwordUserNameAvya(utga, 'password')}} placeholder='password' value={newtrekhUtga.password}/>
                    <button className={`px-5 py-1 rounded outline-none bg-rose-800 hover:bg-rose-900 text-base transition-all active:scale-95 !text-gray-100`} onClick={newtrekhDarya}>
                        Нэвтрэх
                    </button>
                </div>
            </div>
        }
        
    </Transition>
}