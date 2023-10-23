'use client'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export const Zagvar = ({children, ...props}: ThemeProviderProps) => {
    return <ThemeProvider {...props}>{children}</ThemeProvider>
}