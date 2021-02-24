import React, {Component} from 'react';
import Header from './Header';
import './login.css';

class Login extends Component{
    render(){
        return(
            <div class='login-container'>
                <Header title='Login Form'/>
                <div class='login-form'>
                    <h2>Third Meeting Assignment</h2>
                    <table>
                        <tr>
                            <td class='txt-input'>Username</td>
                            <td class='input-col'><input class='input-txt' type='text' placeholder='Enter Username'/></td>
                        </tr>
                        <tr>
                            <td class='txt-input'>Password</td>
                            <td class='input-col'><input class='input-txt' type='password' placeholder='Enter Password'/><br/></td>
                        </tr>
                    </table>
                    <button class='btn-login'>Login</button><br/>
                    <input class='rememberme' type='checkbox'/>Remember me<br/>
                    <button class='btn-cancel'>Cancel</button>
                </div>
            </div>
        )
    }
}
export default Login;

