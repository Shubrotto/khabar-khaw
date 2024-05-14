import Carousel from "react-material-ui-carousel";
import "./hero.scss";
import { heros } from "../../../data";
import imageLeft from "../../assets/images/hero1_left1.png";

const Hero = () => {
  console.log(heros.map((item) => item.title));
  return (
    <div className="hero_container">
      <Carousel className="hero_wrapper">
        {heros?.map((item) => (
          <div className="item" key={item?.id}>
            <div className="item_left">
              <img className="cook_img" src={imageLeft} alt="" />
              <h1>{item?.title}</h1>
              <div className="input_main">
                <input type="text" />
                <button className="input_btn">Find Food</button>
              </div>
            </div>
            <div className="item_right">
              <img src={item?.image} alt="" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
