import { TypeOfCartState } from "./AppContext";

export const cartActions = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  changeQuantity: "CHANGE_QUANTITY",
};

export type TypeOfReducerAction = {
  type: string;
  payload?: any;
};

export const cartReducer = (
  state: TypeOfCartState,
  action: TypeOfReducerAction
) => {
  const { type, payload } = action;
  switch (type) {
    case cartActions.addToCart:
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case cartActions.removeFromCart:
      return { ...state, cart: state.cart.filter((p) => p.id !== payload.id) };
    case cartActions.changeQuantity:
      return {
        ...state,
        cart: state.cart.filter((prod) =>
          prod.id === payload.id ? (prod.qty = payload.qty) : prod.qty
        ),
      };
    default:
      return state;
  }
};

export const productsFilterReducer = (
  state: TypeOfCartState,
  action: TypeOfReducerAction
) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
