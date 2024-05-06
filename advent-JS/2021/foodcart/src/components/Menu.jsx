import { menuItems } from "../data";
import Item from "./Item";

const Menu = ({ heading }) => {
  return (
    <section className="panel">
      <h1>{heading}</h1>
      <ul className="menu">
        {menuItems.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Menu;
