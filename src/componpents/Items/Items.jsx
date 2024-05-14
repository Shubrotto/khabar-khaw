import { itemsCombo, itemsMixingCombo, AllItems } from "../../../data";
import "./item.scss";

const Items = () => {
  // console.log(item);
  return (
    <div className="item_container">
      <div className="item_wrapper">
        <h2>Combo(Pizza, Burger, Soft-Drink)</h2>
        <div className="items">
          {itemsCombo.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>Price {item.price}/Tk</p>
            </div>
          ))}
        </div>
        <h2 style={{ marginTop: "15px" }}>
          Mixing Combo(Burger, Hot Dog,Soft-Drink, Fried Potato)
        </h2>
        <div className="items">
          {itemsMixingCombo.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>Price {item.price}/Tk</p>
            </div>
          ))}
        </div>
        <h2 style={{ marginTop: "15px" }}>
          Pizza, Burger, Hot Dog,Soft-Drink, Fried Potato etc
        </h2>
        <div className="items">
          {AllItems.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>Price {item.price}/Tk</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
