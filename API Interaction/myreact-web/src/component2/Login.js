import React, {Component} from 'react';
import Header from './Header';
import './login.css';
function onclickCancel(){
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
function onclickLogin(){
    var username = document.getElementById('username').value;
    if(username != ''){
        alert('Hello '+username);
    }
}
class Login extends Component{
    render(){
        return(
            <div class='login-container'>
                <Header title='Login Form'/>
                <div class='login-form'>
                    <h2>Third Meeting Assignment</h2>
                    <table>
                        <tr>
                            <td class='txt-input' >Username</td>
                            <td class='input-col'><input class='input-txt' id='username' type='text' placeholder='Enter Username' required/></td>
                        </tr>
                        <tr>
                            <td class='txt-input'>Password</td>
                            <td class='input-col'><input class='input-txt' id='password' type='password' placeholder='Enter Password' required/><br/></td>
                        </tr>
                    </table>
                    <div>
                        <button class='btn-login' onClick={onclickLogin}>Login</button><br/>
                    </div>
                    <div>
                        <input class='rememberme' type='checkbox'/>Remember me<br/>
                    </div>
                    <div>
                        <button class='btn-cancel' onClick={onclickCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;

