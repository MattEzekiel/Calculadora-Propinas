import { menuItems } from "../../data/db.ts";
import MenuItems from "./MenuItems.tsx";
import useOrder from "../../hooks/useOrder.ts";
import H2 from "../H2.tsx";

function Menu() {
  const { addItem } = useOrder();
  return (
    <section>
      <H2 text={"Menu"} />
      {menuItems.map((item) => (
        <MenuItems key={item.id} item={item} addItem={addItem} />
      ))}
    </section>
  );
}

export default Menu;
