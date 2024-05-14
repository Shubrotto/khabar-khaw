import "./item.scss";

const Item = () => {
  return (
    <div className="item_container">
      <div className="item_wrapper">
        <h2 className="item_title">Pizza, Burger, Soft-Drink</h2>
        <div className="item_info">
          <img
            src="https://i.pinimg.com/736x/3e/c4/54/3ec4540677e8a8591a78114c5b7ed4ce.jpg"
            alt=""
          />
          <div className="item_info_price_desc">
            <p className="price">Price 850/TK</p>
            <p className="desc">
              <span className="name">Pizza:</span> A savory dish with a dough
              base, topped with tomato sauce, cheese, and various toppings,
              baked to perfection. <br /> <span className="name">Burger:</span>{" "}
              A sandwich consisting of a cooked patty, usually beef, placed
              inside a sliced bun, often with lettuce, tomato, and condiments.{" "}
              <br />
              <span className="name">Soft-Drink:</span> A refreshing,
              non-alcoholic beverage, typically carbonated, available in various
              flavors, commonly sweetened with sugar or artificial sweeteners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
