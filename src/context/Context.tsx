import React, { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducers";
import { CartContextObject, Product } from "../interfaces/interfaces";

faker.seed(99);



const sampleContext: CartContextObject = {
  products: [...Array(20)].map((): Product =>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.datatype.boolean(),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.numeric(1,{bannedDigits:['0','6','7','8','9']}),
  })),
  cart: []
}

const Cart = createContext<any | null>(null);

const Context: React.FC<React.PropsWithChildren> = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, sampleContext);

  return(
    <Cart.Provider
      value={{state, dispatch}}
    >
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}