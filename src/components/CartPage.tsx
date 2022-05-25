import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/AppContext";
import Rating from "./Rating";
import "./styles.css";

const CartPage = () => {
  const {
    state: { cart },
    removeFromCart,
    changeQuantity,
  } = CartState();
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="d-flex">
      <div className="cart-products--list">
        <ListGroup>
          {cart.map((prod) => {
            return (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.img} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={1}>
                    <span>${prod.price}</span>
                  </Col>
                  <Col md={2}>
                    <span>
                      <Rating rating={prod.ratings} />
                    </span>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={prod.qty}
                      onChange={(e) =>
                        changeQuantity(prod.id, Number(e.target.value))
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={1}>
                    <Button
                      variant="light"
                      type="button"
                      onClick={() => removeFromCart(prod.id)}
                    >
                      <AiFillDelete fontSize="25px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>

      <div className="filters--bgcontainer summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
        <Button type="button" disabled={!cart.length}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
