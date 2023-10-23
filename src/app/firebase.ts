
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzeANhgGkOQ15VZIRqlwZSVLxe0bRaLAE",
    authDomain: "filmbridge-b8d81.firebaseapp.com",
    projectId: "filmbridge-b8d81",
    storageBucket: "filmbridge-b8d81.appspot.com",
    messagingSenderId: "511169305782",
    appId: "1:511169305782:web:cf6cf0ad464e6fa9069a17",
    measurementId: "G-K7XM5JP6RQ"
  };
  
  // Initialize Firebase
  const filmbridgeApp = initializeApp(firebaseConfig);
  const analytics = getAnalytics(filmbridgeApp);
  const auth = getAuth()

  export { auth, filmbridgeApp }