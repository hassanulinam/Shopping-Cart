import { TypeOfCartState } from "./CartContextProvider";
import {
  TypeOfFiltersState,
  initialProductsFilterState,
} from "./FiltersContextProvider";

export const cartActions = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  changeQuantity: "CHANGE_QUANTITY",
};

export const filterActions = {
  sortBy: "SORT_BY",
  byStock: "BY_STOCK",
  fastDelivery: "FAST_DELIVERY",
  searchQuery: "SEARCH_QUERY",
  clearFilters: "CLEAR_FILTERS",
  byRating: "BY_RATINGS",
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
  state: TypeOfFiltersState,
  action: TypeOfReducerAction
) => {
  const { type, payload } = action;
  switch (type) {
    case filterActions.sortBy:
      return { ...state, sortBy: payload.sortBy };
    case filterActions.byStock:
      return { ...state, byStock: !state.byStock };
    case filterActions.fastDelivery:
      return { ...state, fastDelivery: !state.fastDelivery };
    case filterActions.searchQuery:
      return { ...state, searchQuery: payload.searchQuery };
    case filterActions.byRating:
      return { ...state, rating: payload.rating };
    case filterActions.clearFilters:
      return { ...initialProductsFilterState };
    default:
      return state;
  }
};
