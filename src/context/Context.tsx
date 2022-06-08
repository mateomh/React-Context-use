import React, { createContext, useReducer } from "react";
import faker from '@faker-js/faker';


interface CartContext {
  products: Object[];
  cart: Object[];
};

const sampleContext: CartContext = {
  products: [...Array(20)].map(() =>({
    id: faker.faker.datatype.uuid(),
    name: faker.faker.commerce.productName(),
    price: faker.faker.commerce.price(),
    image: faker.faker.image.image(),
    inStock: faker.faker.random.numeric(),
    fastDelivery: faker.faker.datatype.boolean(),
    rating: faker.faker.random.numeric(1,{bannedDigits:['0','6','7','8','9']}),
  })),
  cart: []
}

const Cart = createContext<CartContext>(sampleContext);

const Context: React.FC<React.PropsWithChildren> = ({children}) => {
  const [state, distpatch] = useReducer(reducer,sampleContext);

  return(
    <Cart.Provider
      value={sampleContext}
    >
      {children}
    </Cart.Provider>
  );
}

export default Context;