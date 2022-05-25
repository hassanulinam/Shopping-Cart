import { createContext, useContext, useReducer } from "react";
import { filterActions, productsFilterReducer } from "./Reducers";

export const initialProductsFilterState = {
  sortBy: "",
  byStock: false,
  fastDelivery: false,
  searchQuery: "",
  rating: 0,
};

export type TypeOfFiltersState = {
  sortBy: "ASC" | "DESC" | string;
  byStock: boolean;
  fastDelivery: boolean;
  searchQuery: string;
  rating: number;
};

export type TypeOfFiltersContext = {
  filters: TypeOfFiltersState;
  changeSortByFilter: (sortBy: string) => void;
  changeByStockFilter: () => void;
  changeFastDeliveryFilter: () => void;
  changeRatingFilter: (rating: number) => void;
  changeSearchQueryFilter: (searchQuery: string) => void;
  clearAllFilters: () => void;
};

const FiltersContext = createContext<TypeOfFiltersContext>({
  filters: { ...initialProductsFilterState },
  changeSortByFilter: () => {},
  changeByStockFilter: () => {},
  changeFastDeliveryFilter: () => {},
  changeRatingFilter: () => {},
  changeSearchQueryFilter: () => {},
  clearAllFilters: () => {},
});

const FiltersContextProvider = ({ children }: { children: JSX.Element }) => {
  const [filters, dispatchFilters] = useReducer(productsFilterReducer, {
    ...initialProductsFilterState,
  });
  const changeSortByFilter = (sortBy: string) => {
    dispatchFilters({ type: filterActions.sortBy, payload: { sortBy } });
  };
  const changeByStockFilter = () => {
    dispatchFilters({ type: filterActions.byStock });
  };
  const changeFastDeliveryFilter = () => {
    dispatchFilters({ type: filterActions.fastDelivery });
  };
  const changeRatingFilter = (rating: number) => {
    dispatchFilters({
      type: filterActions.byRating,
      payload: { rating },
    });
  };
  const changeSearchQueryFilter = (searchQuery: string) => {
    dispatchFilters({
      type: filterActions.searchQuery,
      payload: { searchQuery },
    });
  };
  const clearAllFilters = () => {
    dispatchFilters({ type: filterActions.clearFilters });
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        changeSortByFilter,
        changeByStockFilter,
        changeFastDeliveryFilter,
        changeRatingFilter,
        changeSearchQueryFilter,
        clearAllFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;

export const FiltersState = () => useContext(FiltersContext);
