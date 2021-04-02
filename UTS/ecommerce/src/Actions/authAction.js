export const authenticate = (username, password) =>{
    return (dispatch) => {
        const user = {
            uname: 'argadiaz',
            pass: '12345'
        }
        const opt = {auth: false} 
        if(user.uname === username && user.pass === password) opt.auth = true 
        dispatch({
            type: 'USER_AUTH',
            auth: opt.auth,
            user: {
                uname: username,
                pass: password
            }
        })
    }
}

export const logout = () =>{
    return (dispatch) =>{
        const opt = {
            type: 'USER_LOGOUT',
            auth: false
        }
        dispatch(opt)
    }
}
