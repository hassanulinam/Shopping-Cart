import { CartState } from "../context/CartContextProvider";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import FiltersContextProvider, {
  FiltersState,
} from "../context/FiltersContextProvider";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  const {
    filters: { sortBy, byStock, fastDelivery, searchQuery, rating },
  } = FiltersState();
  const transfromProductsWithFilters = () => {
    let fltProducts = products;
    if (sortBy)
      fltProducts.sort((prod1, prod2) =>
        sortBy === "ASC" ? prod1.price - prod2.price : prod2.price - prod1.price
      );
    if (!byStock) fltProducts = fltProducts.filter((p) => p.inStock);
    if (fastDelivery) fltProducts = fltProducts.filter((p) => p.fastDelivery);
    if (rating) fltProducts = fltProducts.filter((p) => p.ratings >= rating);
    if (searchQuery)
      fltProducts = fltProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery)
      );

    return fltProducts;
  };

  return (
    <div className="home-page--bgcontainer">
      <Filters />
      <div className="product-cards--list">
        {transfromProductsWithFilters().map((p) => (
          <SingleProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
