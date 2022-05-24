import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import "./styles.css";

const Filters = () => {
  const [rate, setRate] = useState(0);
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
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery only"
          name="group1"
          type="checkbox"
          id={"inline-4"}
        />
      </span>
      <label style={{ paddingRight: 10 }}>Rating: </label>
      <Rating rating={rate} onClickingStar={(i) => setRate(i + 1)} />
      <Button variant="light" style={{ marginTop: "auto" }}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
