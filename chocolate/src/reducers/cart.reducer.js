import { ADD_TO_CART } from '../actions/actionCreators';

export function cartReducer( state = {
        cart: []
    }, action ){
    switch( action.type ) {
        case ADD_TO_CART:{
            return {
                cart: [...state.cart, action.payload]
            }
        }

        // case DELETE_FROM_CART: {
        //     return {
        //         ...state,
        //         cart: state.cart.filter(item => item.product !== action.payload.product)
        //     }
        // }

    default:
    return state;
    }
}

// export function qtyReducer( state = {
//         qty: []
//     }, action ){
//     switch( action.type ) {
//         case ADD_QTY:
//             return {
//                 qty: [...state.qty, action.payload]
//             }
//             break;
//         default:
//     }
//     return state;
// }