import H3 from "../H3.tsx";
import { tipOptions } from "../../data/db.ts";
import useOrderContext from "../../hooks/useOrders.ts";

function Tips() {
  const { setTip } = useOrderContext();
  return (
    <div className={"border-t-2 border-secondary pt-5"}>
      <H3 text={"Propina"} />
      <form>
        {tipOptions.map((tip, index) => (
          <div
            key={tip.id || index}
            className={"flex items-center gap-x-3 mb-3"}>
            <input
              type="radio"
              value={tip.value}
              name={"tip"}
              id={tip.id}
              className={"accent-primary"}
              onChange={(e) => setTip(Number(e.target.value))}
            />
            <label htmlFor={tip.id}>{tip.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Tips;
