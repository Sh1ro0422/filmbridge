'use client'
import React from 'react'
const Layout = ({
    children, modal
  }: {
    children: React.ReactNode,
    modal: React.ReactNode
  }) => {

    console.log('qweqwrqwrqweqwe ======> qwe qwe qwe qwe qw e')

    return <div className='w-screen h-screen overflow-hidden'>
        <div>
            
        </div>
        {children}
        {modal}
    </div>
}

export default Layout