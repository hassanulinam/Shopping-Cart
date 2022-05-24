import { CartState } from "../context/AppContext";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="home-page--bgcontainer">
      <Filters />
      <div className="product-cards--list">
        {products.map((p) => (
          <SingleProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
