/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { filmbridgeApp } from './firebase'
import newtrekh, { garakh } from './serverActions/newtrekh'
import { useRouter } from 'next/navigation'
import { Khuleelge, isNullOrUndefined } from '@/components/index'
export const NewtreltCtx = React.createContext<unknown>(null)
interface User {
    email:string | null,
    loggedIn:boolean
}

interface Utga {
    userName:string,
    password:string,
}
const auth = getAuth()

export const useNewtrelt = () => React.useContext(NewtreltCtx)

export default function NewtreltContext ({children}:{children:React.ReactNode}) {
    const [user, setUser] = React.useState<User | null>()
    const [newtresenEsekh, setNewtersenEsekh] = React.useState(false)
    const [newtrekhUtga, setNewtrekhUtga] = React.useState<Utga | null>({
        userName: '',
        password: ''
    })
    const [loader, setLoader] = React.useState(true)
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    loggedIn: true,
                })
            } else {
                setUser(null);
            }
            setLoader(false)
        });

        return () => unsubscribe();
    }, []);


    const passwordUserNameAvya = (utga:string, khoch:string) => {
        newtrekhUtga[khoch] = utga
        setNewtrekhUtga({...newtrekhUtga})
    }

    const newtrekhDarya = () => {
        if(newtrekhUtga?.userName === '' || newtrekhUtga?.password === '') return alert('Newtrekh ner eswel password khooson bna')
        newtrekh(newtrekhUtga?.userName, newtrekhUtga?.password).then(result => {
            console.log("result ====>", result)
            if(!isNullOrUndefined(result.khariu)) {
                setUser({
                    email: result.khariu?.user.email,
                    loggedIn: true,
                })
            }
        })
    }

    const logOut = () => {
        setLoader(true)
        garakh().then(result => {
            console.log("logout result =======>", result)
            setUser(null)
        }).finally(() => {
            setLoader(false)
        })
    }

    return <NewtreltCtx.Provider value={{user, newtrekhUtga, passwordUserNameAvya, newtrekhDarya, logOut}}>
        {
            loader ? <Khuleelge/> : children
        }
    </NewtreltCtx.Provider>
}