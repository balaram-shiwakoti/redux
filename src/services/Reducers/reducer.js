import {ADD_TO_CART} from '../constants'


const initialState={
    cartData:[]
}

export default function cartItems(state=initialState,action)
{
// eslint-disable-next-line default-case
switch(action.type){
    case ADD_TO_CART:
    return{
        ...state,
        cartData:action.data
    }
    break;
    default:
        return state
}
}