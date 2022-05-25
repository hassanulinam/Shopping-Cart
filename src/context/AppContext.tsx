import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartActions, cartReducer, TypeOfReducerAction } from "./Reducers";

export type TypeOfProduct = {
  id: string;
  name: string;
  price: number;
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
  img: string;
};

export type TypeOfCartItem = {
  qty: number;
  id: string;
  name: string;
  price: number;
  inStock: number;
  fastDelivery: boolean;
  ratings: number;
  img: string;
};

export type TypeOfCartState = {
  products: TypeOfProduct[];
  cart: TypeOfCartItem[];
};

export type TypeofCartContext = {
  state: TypeOfCartState;
  addToCart: (product: TypeOfProduct) => void;
  removeFromCart: (productId: string) => void;
  changeQuantity: (productId: string, quantity: number) => void;
};

const CartContext = createContext<TypeofCartContext>({
  state: { products: [], cart: [] },
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
});
faker.seed(50);

const AppContext = ({ children }: { children: JSX.Element }) => {
  const products = [...Array(30)].map(() => ({
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

  const addToCart = (product: TypeOfProduct) => {
    dispatch({
      type: cartActions.addToCart,
      payload: product,
    });
  };

  const removeFromCart = (productId: string) => {
    dispatch({
      type: cartActions.removeFromCart,
      payload: { id: productId },
    });
  };

  const changeQuantity = (productId: string, quantity: number) => {
    dispatch({
      type: cartActions.changeQuantity,
      payload: { id: productId, qty: quantity },
    });
  };

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default AppContext;

export const CartState = () => useContext(CartContext);
