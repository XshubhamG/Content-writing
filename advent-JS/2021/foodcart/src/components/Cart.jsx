import { useState } from "react";
import { menuItems } from "../data";

const Cart = ({ heading }) => {
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (item) => {
    setAddedItems([...addedItems, item]);
  };

  return (
    <section className="panel cart">
      <h1>{heading}</h1>
      <ul className="cart-summary"></ul>
    </section>
  );
};

export default Cart;
