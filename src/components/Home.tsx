import { CartState } from "../context/Context";
import { Product } from "../interfaces/interfaces";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home: React.FC = () => {
  const { 
    state: { products },
    filterState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  
  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a:Product, b:Product) =>
        sort === "lowToHigh" ? Number(a.price) - Number(b.price) : Number(b.price) - Number(a.price)
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod:Product) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod:Product) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod:Product) => prod.rating >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod:Product) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  return(
    <div className="home">
      <Filters />
      <div className="productContainer">
        {
          transformProducts().map((prod: Product) => {
            return <SingleProduct prod={prod} key={prod.id}/>
          })
        }
      </div>

    </div>
  )
}

export default Home;