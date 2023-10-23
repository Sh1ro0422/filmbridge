'use client'
import * as ReactDOMServer from 'react-dom/server'

type Props = {
    ugugdul:any
}

const Etseg = (props:Props) => {
    const { ugugdul } = props
    
    return <div id={'trailerDialog'} className={`fixed flex flex-col items-center justify-center w-full h-full top-0 left-0 z-[10000] bg-[#e3e3e3] dark:bg-[#000000] dark:bg-opacity-70 bg-opacity-70 backdrop-blur-md p-20`}>
        <div className='group w-fit h-fit absolute top-5 right-5 flex items-center flex-row'>
            <span id='close' className='w-[20px] h-[20px] text-xl overflow-hidden cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
                    <path fill="currentColor" d="m96 373.3l-96 96L42.7 512l96-96l74.7 74.7v-192h-192L96 373.3zm394.7-74.6h-192v192l74.7-74.7l96 96l42.7-42.7l-96-96l74.6-74.6zM42.7 0L0 42.7l96 96l-74.7 74.7h192v-192L138.7 96l-96-96zM416 138.7l96-96L469.3 0l-96 96l-74.7-74.7v192h192L416 138.7z"/>
                </svg>
            </span>
            <span className='px-2 py-1 scale-0 rounded-md transition-all absolute left-[-60px] text-gray-100 bg-gray-800 bg-opacity-60 backdrop-blur-sm group-hover:scale-100'>
                Хаах
            </span>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='text-xl font-bold'>{ugugdul['Title']}</div>
            <div id='trailer' className='z-auto'>
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/9vIxi5XkQ8Y" title="Solo Leveling | OFFICIAL TRAILER 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
}

export const trailerUzye = (kinoMedeelel:any) => {
    const dialog = ReactDOMServer.renderToString(<Etseg ugugdul={kinoMedeelel}/>)
    document.body.style.overflow = 'hidden'
    const dialogKhaaya = () => {
        const node = document.getElementById('trailerDialog')
        document.body.style.overflow = 'auto'
        document.body.removeChild(node!)
    }

    const onKeyDown = (e:any) => {
        if(e.key === 'Escape') {
            document.body.removeEventListener('keydown', onKeyDown)
            dialogKhaaya()
        }
    }

    const clickIdevkhiguiBolgoy = (e:any) => {
        e.preventDefault()
        e.stopPropagation()
        return
    }
    document.body.insertAdjacentHTML('beforeend', dialog)
    document.getElementById('close')!.addEventListener('click', dialogKhaaya)
    document.body.addEventListener('keydown', onKeyDown)
    document.getElementById('trailer')!.addEventListener('click', clickIdevkhiguiBolgoy)
}