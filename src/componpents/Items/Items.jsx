import { useState } from "react";
import { itemsCombo, itemsMixingCombo, AllItems } from "../../../data";
import "./item.scss";
import { Link } from "react-router-dom";

const Items = () => {
  const [viewItem, setViewItem] = useState(false);
  // console.log(item);
  const handleViewItem = () => {
    setViewItem(true);
  };
  return (
    <div className="item_container">
      <div className="item_wrapper">
        <h2>Combo(Pizza, Burger, Soft-Drink)</h2>
        <div className="items">
          {itemsCombo.map((item) => (
            <>
              <div key={item.id} className="item">
                <div className="item_img">
                  <img src={item.image} alt="" />
                  <div className="overlay" key={item.id}>
                    {viewItem ? (
                      <button onClick={() => handleViewItem(item.id)}>
                        <Link className="food_btn" to="/item/:id">
                          View Food Item
                        </Link>
                      </button>
                    ) : (
                      <button onClick={() => handleViewItem(item.id)}>
                        Add to Cart
                      </button> // for handle add to cart here
                    )}
                  </div>
                </div>
                <h4>{item.title}</h4>
                <p>Price {item.price}/Tk</p>
              </div>
            </>
          ))}
        </div>
        <h2 style={{ marginTop: "15px" }}>
          Mixing Combo(Burger, Hot Dog,Soft-Drink, Fried Potato)
        </h2>
        <div className="items">
          {itemsMixingCombo.map((item) => (
            <div className="item" key={item.id}>
              <div className="item_img">
                <img src={item.image} alt="" />
                <div className="overlay">
                  {viewItem ? (
                    <button onClick={handleViewItem}>
                      <Link className="food_btn" to="/item/:id">
                        View Food Item
                      </Link>
                    </button>
                  ) : (
                    <button onClick={handleViewItem}>Add to Cart</button>
                  )}
                </div>
              </div>
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
              <div className="item_img">
                <img src={item.image} alt="" />
                <div className="overlay">
                  {viewItem ? (
                    <button onClick={handleViewItem}>
                      <Link className="food_btn" to="/item/:id">
                        View Food Item
                      </Link>
                    </button>
                  ) : (
                    <button onClick={handleViewItem}>Add to Cart</button>
                  )}
                </div>
              </div>
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
