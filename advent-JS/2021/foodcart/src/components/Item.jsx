import { useState } from "react";

const Item = ({ item }) => {
  const [inchart, setInchart] = useState(false);

  const handleClick = () => {
    setInchart(!inchart);
  };

  return (
    <li>
      <div className="plate">
        <img src={`../../${item.image}`} alt={item.alt} className="plate" />
      </div>
      <div className="content">
        <p className="menu-item">{item.name}</p>
        <p className="price">${item.price}</p>
        <button onClick={handleClick} className={`${inchart ? "in-cart" : ""}`}>
          {inchart && <img src="../../check.svg" alt="Check" />}
          {inchart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </li>
  );
};

export default Item;
