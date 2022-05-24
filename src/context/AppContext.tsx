import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, TypeOfReducerAction } from "./Reducers";

export type TypeOfProduct = {
  id: string;
  name: string;
  price: number;
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
  img: string;
  qty?: number;
};

export type TypeOfCartState = {
  products: TypeOfProduct[];
  cart: TypeOfProduct[];
};

export type TypeofCartContext = {
  state: TypeOfCartState;
  dispatch: React.Dispatch<TypeOfReducerAction>;
};

const CartContext = createContext<TypeofCartContext>({
  state: { products: [], cart: [] },
  dispatch: () => {},
});
faker.seed(50);

const AppContext = ({ children }: { children: JSX.Element }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    img: faker.image.business(640, 480, true),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default AppContext;

export const CartState = () => useContext(CartContext);
