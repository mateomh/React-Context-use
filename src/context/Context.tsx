import React, { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer } from "./Reducers";
import { CartContextObject, FilterContextObject, Product } from "../interfaces/interfaces";

faker.seed(99);

const sampleContext: CartContextObject = {
  products: [...Array(20)].map((): Product =>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: Number(faker.random.numeric()),
    fastDelivery: faker.datatype.boolean(),
    rating: Number(faker.random.numeric(1,{bannedDigits:['0','6','7','8','9']})),
  })),
  cart: []
}

const sampleFilterContext: FilterContextObject = {
  byStock: false,
  byFastDelivery:false,
  byRating: 0,
  serchString: "",
  sort:"",
}

const Cart = createContext<any | null>(null);

const Context: React.FC<React.PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, sampleContext);

  const [filterState, filterDispatch] = useReducer(filterReducer, sampleFilterContext);

  return(
    <Cart.Provider
      value={{state, dispatch, filterState, filterDispatch}}
    >
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}