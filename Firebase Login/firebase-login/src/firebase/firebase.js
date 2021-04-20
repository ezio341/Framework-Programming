import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB6JSC1RBLl_y-Dxdi_H7baAGpD0rWtXLI",
    authDomain: "fir-example-471fa.firebaseapp.com",
    projectId: "fir-example-471fa",
    storageBucket: "fir-example-471fa.appspot.com",
    messagingSenderId: "606677152673",
    appId: "1:606677152673:web:4f4cd55e88dd6be02251e0",
    measurementId: "G-YR1P5N45YF"
  }

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb