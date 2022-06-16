export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  inStock: number;
  fastDelivery: boolean;
  rating: number;
};

export interface CartContextObject {
  products: Product[];
  cart: Product[];
};

export interface FilterContextObject {
  byStock: boolean;
  byFastDelivery: boolean;
  byRating: number;
  serchString: string;
  sort: any;
}