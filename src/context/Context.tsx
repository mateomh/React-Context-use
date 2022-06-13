import React, { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducers";
import { Product } from "../interfaces/interfaces";


interface CartContextObject {
  products: Product[];
  cart: Product[];
};

const sampleContext: CartContextObject = {
  products: [...Array(20)].map((): Product =>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.numeric(),
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