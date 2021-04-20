import React, {useState,useContext} from "react"
import {AuthContext} from "./index"
import firebase from 'firebase'

const Join = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setErrors] = useState("")

    const Auth = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        console.log(Auth)
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res)
            if(res.user) Auth.setLoggedIn(true)
        })
        .catch(e=>{
            setErrors(e.message)
        })
    };
    
    const signUpWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res)
            if(res.user) Auth.setLoggedIn(true)
        })
        .catch(e=>{
            setErrors(e.message)
            console.log(e.message)
        })
    }

    return(
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    placeholder="password"
                />
                <hr/>
                <button className="googleBtn" type="button" onClick={signUpWithGoogle}>
                    Join with google
                </button>
                <button type="submit">Join</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Join