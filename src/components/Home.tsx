import { CartState } from "../context/Context";
import { Product } from "../interfaces/interfaces";
import SingleProduct from "./SingleProduct";

const Home: React.FC = () => {
  const { state: { products } } = CartState();

  console.log(products);

  return(
    <div className="home">
      <div className="productContainer">
        {
          products.map((prod: Product) => {
            return <SingleProduct />
          })
        }
      </div>

    </div>
  )
}

export default Home;