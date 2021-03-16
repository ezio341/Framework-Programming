import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useHistory,
    useLocation,
    Redirect
} from 'react-router-dom'
import './style.css'
import Product from './Product'

export default function MainPage(){
    return (
        <Router>
            <h3>Toko Kita</h3>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/product">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path='/product'>
                        <Product/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <AuthRoute path="/cart">
                        <Cart/>
                    </AuthRoute>
                </Switch>
            </div>
        </Router>
    )
}

const fakeAuth = {
    isAuth : false,
    Authenticate(cb){
        fakeAuth.isAuth = true
        setTimeout(cb, 100)
    },
    SignOut(cb){
        fakeAuth.isAuth = false
        setTimeout(cb, 100)
    }
}
function AuthRoute({children, ...rest}){
    return(
        <Route {...rest}
            render={({location})=>
                fakeAuth.isAuth ? (
                    children
                ):(
                    <Redirect
                        to={{
                            pathname : "/login"
                        }}/>
                )
        }/>
    )
}
function LoginPage(){
    let history = useHistory()
    let location = useLocation()

    let {from} = location.state || {from: {pathname:"/cart"}}
    let login = () => {
        fakeAuth.Authenticate(()=>{
            history.replace(from)
        })
    }
    return(
        <div>
            <p>Login to access Cart Page</p>
            <button onClick={login}>Login</button>
        </div>
    )
}
function Cart(){
    let history = useHistory()
    let location = useLocation()

    let {from} = location.state || {from: {pathname:"/cart"}}
    let signout = () =>{
        fakeAuth.SignOut(()=>{
            history.replace(from)
        })
    }
    return(
        <div className='center'>
            <p>Your Cart is Empty</p>
            <button onClick={signout}>Sign Out</button>
        </div>
    )
}
function Home(){
    return(
        <div className="center">
            <h3>Welcome to Toko Kita</h3>
            <img src="https://th.bing.com/th/id/OIP.9Yyho2E6EoP6SO4qdXg1aQHaEK?w=321&h=180&c=7&o=5&pid=1.7" height="80%" width="80%"></img>
        </div>
    )
}