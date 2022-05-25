import {
  Container,
  Navbar,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/CartContextProvider";
import { AiFillDelete } from "react-icons/ai";
import "./styles.css";
import { FiltersState } from "../context/FiltersContextProvider";

const Header = () => {
  const {
    state: { cart },
    removeFromCart,
  } = CartState();

  const {
    filters: { searchQuery },
    changeSearchQueryFilter,
  } = FiltersState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search Products..."
            className="m-auto"
            onChange={(e) =>
              changeSearchQueryFilter(e.target.value.toLowerCase())
            }
            value={searchQuery}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge variant="primary">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className="cart-item-container" key={prod.id}>
                      <img
                        src={prod.img}
                        className="cart-item-img"
                        alt={prod.name}
                      />
                      <div className="cart-item-details">
                        <span>{prod.name}</span>
                        <span>${prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(prod.id)}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
