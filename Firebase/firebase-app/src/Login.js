import React, {useState,useContext} from "react"
import {AuthContext} from "./index"
import firebase from 'firebase'


const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setErrors] = useState("")

    const Auth = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        console.log(Auth)
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res)
            if(res.user) Auth.setLoggedIn(true)
        })
        .catch(e=>{
            setErrors(e.message)
        })
    };
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res.user)
            if(res.user) Auth.setLoggedIn(true)
        })
        .catch(e=>{
            setErrors(e.message)
            console.log(e.message)
        })
    }

    return(
        <div>
            <h1>Login</h1>
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
                <button className="googleBtn" type="button" onClick={signInWithGoogle}>
                    Login with google
                </button>
                <button type="submit" >Login</button>
                <span>{error}</span>
            </form>
        </div>
    )
}

export default Login