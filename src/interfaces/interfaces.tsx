export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: boolean;
  fastDelivery: boolean;
  rating: string;
};

export interface CartContextObject {
  products: Product[];
  cart: Product[];
};