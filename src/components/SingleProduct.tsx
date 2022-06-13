import { Product } from "../interfaces/interfaces";

interface SingleProductProps {
  prod: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ prod }) => {
  return(
    <>
      <span>{prod.name}</span>
    </>
  );
}

export default SingleProduct;