import {combineReducers} from 'redux'
import cart from './CartReducer'
import auth from './AuthReducer'

export default combineReducers({
    cart, auth
})