import { menuItems } from "../../data/db.ts";
import MenuItems from "./MenuItems.tsx";
import H2 from "../H2.tsx";
import useOrderContext from "../../hooks/useOrders.ts";

function Menu() {
  const { addItem } = useOrderContext();
  return (
    <section id={"menu"} className={"p-5 max-h-full overflow-y-auto"}>
      <H2 text={"Menú"} />
      {menuItems.map((item) => (
        <MenuItems key={item.id} item={item} addItem={addItem} />
      ))}
    </section>
  );
}

export default Menu;
