import { CartContextObject } from "../interfaces/interfaces";

export const cartReducer = (state:CartContextObject, action:any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart,{...action.payload, qty: 1}]}
    case 'REMOVE_FROM_CART':
    return {...state, cart: state.cart.filter((item)=> item.id !== action.payload.id)}
    default:
      return state;
  }
}