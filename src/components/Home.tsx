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
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>

    </div>
  )
}

export default Home;