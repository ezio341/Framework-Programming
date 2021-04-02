let INITIAL_DATA = []

const AUTH = (state=INITIAL_DATA, action) =>{
    switch(action.type){
        case 'USER_AUTH':
            return {
                ...state,
                auth: action.auth,
                user: action.user
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                auth: action.auth
            }
        default:
            return state
    }
}
export default AUTH