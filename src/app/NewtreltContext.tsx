'use client'
import React from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { filmbridgeApp } from './firebase'
import newtrekh from './serverActions/newtrekh'
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
export default function NewtreltContext ({children}:{children:React.ReactNode}) {
    const [user, setUser] = React.useState<User | null>()
    const [newtresenEsekh, setNewtersenEsekh] = React.useState(false)
    const [newtrekhUtga, setNewtrekhUtga] = React.useState<Utga | null>({
        userName: '',
        password: ''
    })

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
        });

        return () => unsubscribe();
    }, []);


    const passwordUserNameAvya = (utga:string, khoch:string) => {
        newtrekhUtga[khoch] = utga
        setNewtrekhUtga({...newtrekhUtga})
    }

    const newtrekhDarya = () => {
        const test = newtrekh(newtrekhUtga?.userName, newtrekhUtga?.password)
        console.log(test)
        test.then(result => {
            setUser({
                email: result.khariu?.user.email,
                loggedIn: true,
            })
        })
    }

    return <NewtreltCtx.Provider value={{user, newtrekhUtga, passwordUserNameAvya, newtrekhDarya}}>
        {children}
    </NewtreltCtx.Provider>
}