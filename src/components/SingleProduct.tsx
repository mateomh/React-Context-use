import { Button, Card } from "react-bootstrap";
import { Product } from "../interfaces/interfaces";
import Rating from "./Rating";

interface SingleProductProps {
  prod: Product;
}

const SingleProduct: React.FC<SingleProductProps> = ({ prod }) => {
  return(
    <>
      <div className="products">
        <Card>
          <Card.Img
            variant="top"
            src={prod.image}
            alt={prod.name}
          />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom: 10}}>
              <span>{prod.price.split(".")[0]}</span>
              {prod.fastDelivery
                ? (<div>Fast Delivery</div>)
                : (<div>4 Day delivery</div>)}
              <Rating rating={parseInt(prod.rating)}/>
            </Card.Subtitle>
            <Button variant="danger">Remove from cart</Button>
            <Button disabled={!prod.inStock}>Add to cart</Button>
            {prod.inStock ? (<div>In stock</div>) : (<div>Out of stock</div>)}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SingleProduct;