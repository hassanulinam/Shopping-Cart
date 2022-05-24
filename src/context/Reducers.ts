import { TypeOfCartState } from "./AppContext";

export const cartActions = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
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
    default:
      return state;
  }
};
