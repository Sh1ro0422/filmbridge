'use client'
import React from 'react'
interface Props {
    onChange:Function,
    placeholder:string,
    className:string,
    style:object,
    value:any,
    inputClass:string,
    type:string,
}
const Input = (props:Props) => {
    const { onChange, placeholder='', className = '', style={}, value='', inputClass='', type='text' } = props

    const utgaButsaay = (e:any) => {
        if(typeof onChange === 'function') onChange(e.target.value)
    }

    return (
        <div className={`group w-full h-fit rounded py-1 overflow-hidden relative after:content-[""] flex items-center justify-center after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2
            after:border-gray-300 before:content-[""] before:absolute before:bottom-0 before:border-b-2 before:border-sky-600 before:z-10 before:transition-all duration-500 
            before:w-0 hover:before:w-full focus-within:before:w-full ${className}
        `}>
            <input 
                value={value}
                type={type}
                className={`bg-transparent text-gray-100 w-full !outline-none px-2 py-1 text-base ${inputClass}`} 
                placeholder={placeholder}
                onChange={(e) => {utgaButsaay(e)}}
            />
        </div>
    )
}

export default Input