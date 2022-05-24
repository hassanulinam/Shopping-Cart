import { Button, Card } from "react-bootstrap";
import { CartState, TypeOfProduct } from "../context/AppContext";
import { cartActions } from "../context/Reducers";
import Rating from "./Rating";

const SingleProduct = ({ product }: { product: TypeOfProduct }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { id, name, price, ratings, img, fastDelivery, inStock } = product;
  return (
    <div className="product-card--bgcontainer">
      <Card>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {price}</span>
            {fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
            <Rating rating={ratings} onClickingStar={() => {}} />
          </Card.Subtitle>
          {cart.some((p) => p.id === id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: cartActions.removeFromCart,
                  payload: { id },
                });
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              disabled={!inStock}
              onClick={() =>
                dispatch({
                  type: cartActions.addToCart,
                  payload: product,
                })
              }
            >
              {!inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
