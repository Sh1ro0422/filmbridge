/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { motion } from "framer-motion";
import React from 'react'

interface Props {
    component: React.ReactNode,
    componentProps: object,
    title:any,
    isOpen:Boolean
}

const Dialog = (props:Props) => {
    const { component, title, componentProps, isOpen = false } = props
    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className=" flex fixed top-0 left-0 z-[10001] w-full h-full justify-center items-center">
    <div className="dialog-mask absolute w-full h-full top-0 left-0 bg-[#e3e3e3] bg-opacity-70 dark:bg-black dark:bg-opacity-70 backdrop-blur-sm"/>
    <motion.div id='modalContent' initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className={'relative w-[720px] h-[480px] bg-white rounded-md'}>

    </motion.div>
</motion.div>
}


export default Dialog