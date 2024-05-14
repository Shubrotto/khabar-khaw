import "./about.scss";
import AboutImage from "../../assets/images/hero1.png";
import AboutleftImage from "../../assets/images/about_left.png";
import AbouttightImage from "../../assets/images/about_right.png";

const About = () => {
  return (
    <div className="about_container">
      <img className="about_left_image" src={AboutleftImage} alt="" />
      <div className="about_wrapper">
        <h2>About Us</h2>
        <img src={AboutImage} alt="" />
        <p>
          Welcome to Khabar Khaw, where deliciousness knows no bounds! Indulge
          in a culinary journey that transcends borders with our diverse menu
          featuring mouthwatering pizzas, succulent burgers, classic hot dogs,
          crispy fried potatoes, and a refreshing array of soft drinks including
          Coca-Cola, Clemens, Sprite, Spreed, 7UP, and Pepsi. At Khabar Khaw, we
          blend flavors from around the world to create an unforgettable dining
          experience that satisfies every craving. Join us and savor the taste
          of excellence at Khabar Khaw!
        </p>
      </div>
      <img className="about_right_image" src={AbouttightImage} alt="" />
    </div>
  );
};

export default About;
