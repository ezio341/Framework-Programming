let INITIAL_DATA = []
const CartReducer = (state = INITIAL_DATA, action) =>{
    switch(action.type){
        case 'ADD_CART':
            return {
                ...state,
                new: action.data
            }
        case 'DELETE_CART':
            return state
        case 'SHOW_DATA':
            return {
                ...state,
                data: action.data
            }
        case 'UPDATE_CART':
            return{
                ...state,
                status: action.status
            }
        case 'DELETE_DATA':
            return{
                ...state,
                msg: action.data
            }
        case 'GOTO_PAGE':
            return{
                ...state,
                pageNum: action.pageNum
            }
        default:
            return state
    }
}
export default CartReducer