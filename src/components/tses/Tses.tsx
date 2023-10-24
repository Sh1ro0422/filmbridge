/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import Durs from "../Durs/Durs"
import { useTheme } from "next-themes"
import PropTypes from 'prop-types'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import MenuItem from './dedKheseg/MenuItem'
import { useNewtrelt } from '@/app/NewtreltContext'
import Tooltip from '../Tooltip/Tooltip'
interface Props {
    jagsaalt:any[]
}

const Tses = (props:Props) => {
    const { theme, setTheme } = useTheme()
    const [hover, setHover] = React.useState(null)
    const { jagsaalt } = props
    const zam = usePathname()

    const { user } = useNewtrelt()
    console.log('tses user ======>', user)
    React.useEffect(() => {
        document.addEventListener('scroll', scrollMedrey)
        return () => {
            document.removeEventListener('scroll', scrollMedrey)
        }
    },[theme, props, zam])

    function scrollMedrey (e:any) {
        const body = e.target.scrollingElement
        if(body.scrollTop != 0) {
            document.getElementById('FilmBridgeNavbar')?.classList.add('shadow-md')
            if(['/', '/admin'].some(x => x === zam) ){
                document.getElementById('FilmBridgeNavbar')?.classList.remove('!bg-transparent')
                document.getElementById('FilmBridgeNavbar')?.classList.add('backdrop-blur-sm')
            }
            if(theme === 'light' && ['/', '/admin'].some(x => x === zam) )
                document.getElementById('FilmBridgeNavbar')?.classList.remove('!text-gray-100')
        } else {
            document.getElementById('FilmBridgeNavbar')?.classList.remove('shadow-md')
            if(['/', '/admin'].some(x => x === zam) ) {
                document.getElementById('FilmBridgeNavbar')?.classList.add('!bg-transparent')
                document.getElementById('FilmBridgeNavbar')?.classList.remove('backdrop-blur-sm')
            }
            if(theme === 'light' && ['/', '/admin'].some(x => x === zam) )
                document.getElementById('FilmBridgeNavbar')?.classList.add('!text-gray-100')
        }
    }

    return <div id='FilmBridgeNavbar' className={`flex flex-row fixed left-0 top-0 min-h-[50px] w-full max-h-[50px] ${ ['/', '/admin'].some(x => x === zam) ? "!bg-transparent !text-gray-100" : "backdrop-blur-sm"} bg-[#f5f5f5] dark:bg-[#2c2c2c] transition-all bg-opacity-70 dark:bg-opacity-70 p-0 items-center z-[10000]`}>
        <div className={`flex relative flex-row w-full h-[50px] min-h-[50px] justify-between container mx-auto items-center px-2`}>
            <div className="flex flex-row gap-10 min-h-full h-full items-center">
                <div className="w-fit h-full flex items-center font-bold">
                    FilmBridge
                </div>
                <ul className={`flex flex-row w-fit h-full gap-2 items-center`} onMouseLeave={() => {setHover(null)}}>
                    {
                        jagsaalt.map((x, i) => {
                            return <MenuItem key={i} title={x.ner} url={x.slug} hover={hover} setHover={(e:any) => {setHover(e)}}/>
                        })
                    }
                </ul>
            </div>
            <div className="flex flex-row gap-3 items-center min-h-full h-full">
                {
                    user?.loggedIn && <Tooltip placement='left' title={user?.email}>
                        <button className='text-xl'>
                            <Durs icon='carbon:user-avatar-filled-alt'/>
                        </button>
                    </Tooltip>
                }
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-xl dark:hover:bg-[#333333] hover:bg-gray-200 p-1 rounded-md">
                    <Durs icon={theme === 'dark' ? 'material-symbols:dark-mode-rounded' : 'material-symbols:light-mode-outline-sharp'}/> 
                </button>
            </div>
        </div>
    </div>
}

Tses.propTypes = {
    jagsaalt: PropTypes.array.isRequired
}

export default Tses