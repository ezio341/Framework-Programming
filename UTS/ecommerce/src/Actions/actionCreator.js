export const addCart = data => {
    return (dispatch) => {
        const body = {
            'productid': data.id, 
            'name': data.name, 
            'price': data.price, 
            'stock': data.stock, 
            'desc': data.desc,
            'img': data.img,
            'amount': 1,
            'rate': data.rate
        }
        const option = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
                }
        }
        return fetch('http://localhost:3031/cart/', option)
            .then(response=>response.json())
            .then(res => {
                dispatch({type: 'ADD_CART', data: res})
            })
    }
}
export const deleteCart = id =>{
    return (dispatch) => {
        return fetch('http://localhost:3031/cart/'+id, {method: 'DELETE', headers:{'Content-Type':'application/json'}, body: null})
            .then(response => response.json())
            .then(res => {
                dispatch({type: 'DELETE_DATA', data: res})
            })
    }
}
export const showCart = () =>{
    return (dispatch) =>{
        return fetch('http://localhost:3031/cart')
            .then(response => response.json())
            .then(res => {
                dispatch({type: 'SHOW_DATA', data: res})
            })
    } 
}
export const updateCart = (cart) => {
    return (dispatch) => {
        const body = {
            'productid': cart.productid, 
            'name': cart.name, 
            'price': cart.price, 
            'stock': cart.stock, 
            'desc': cart.desc,
            'img': cart.img,
            'amount': cart.amount,
            'rate': cart.rate
        }
        return fetch('http://localhost:3031/cart/'+cart.id, {method: 'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)})
            .then(response => response.json())
            .then(res => {
                dispatch({type: 'UPDATE_CART', status: 'OK'})
            })
    }
}

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
