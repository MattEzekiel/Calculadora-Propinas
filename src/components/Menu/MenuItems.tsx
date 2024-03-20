import { MenuItem } from "../../types";
import { formatPrice } from "../../helpers";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

function MenuItems({ item, addItem }: MenuItemsProps) {
  const { name, price, id } = item;
  return (
    <article
      key={id}
      className={
        "border rounded p-5 shadow mb-10 hover:shadow-xl transition duration-300"
      }>
      <div className={"flex justify-between items-center mb-10"}>
        <h3 className={" text-2xl font-bold text-teal-700"}>{name}</h3>
        <p
          className={"text-lg mt-3 font-bold text-teal-700"}
          aria-labelledby={"Precio"}>
          {formatPrice(price)}
        </p>
      </div>
      <button
        type={"button"}
        className={
          "text-black hover:bg-teal-700 hover:text-white font-medium py-2 px-4 rounded transition-colors duration-300 border border-teal-400 hover:border-teal-700 block md:w-fit md:ml-auto"
        }
        onClick={() => addItem(item)}>
        Agregar
      </button>
    </article>
  );
}

export default MenuItems;
