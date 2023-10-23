import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { filmbridgeApp } from "@/app/firebase";

const auth = getAuth(filmbridgeApp)

export default async function newtrekh(email:string, password:string) {
    let khariu:any = null, aldaa:any = null
    try {
        khariu = await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        aldaa  = e
    }
    return { khariu, aldaa }
}