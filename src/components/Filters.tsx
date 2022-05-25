import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FiltersState } from "../context/FiltersContextProvider";
import Rating from "./Rating";
import "./styles.css";

const Filters = () => {
  const {
    filters: { sortBy, byStock, fastDelivery, rating },
    changeSortByFilter,
    changeByStockFilter,
    changeFastDeliveryFilter,
    changeRatingFilter,
    clearAllFilters,
  } = FiltersState();
  return (
    <div className="filters--bgcontainer">
      <span className="filters--title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={"inline-1"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={"inline-2"}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include the out of stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          onChange={changeByStockFilter}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          onChange={changeFastDeliveryFilter}
          checked={fastDelivery}
        />
      </span>
      <label style={{ paddingRight: 10 }}>Rating: </label>
      <Rating
        rating={rating}
        fontSize="20px"
        onClickingStar={(i) => changeRatingFilter(i + 1)}
      />
      <Button style={{ marginTop: "auto" }} onClick={clearAllFilters}>
        Clear All Filters
      </Button>
    </div>
  );
};

export default Filters;
