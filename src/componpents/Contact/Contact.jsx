import "./contact.scss";
import { TfiEmail, TfiLinkedin } from "react-icons/tfi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import ContactLeftImage from "../../assets/images/contact.png";
import ContactRightImage from "../../assets/images/contact_right.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact_container">
      <img className="left_image" src={ContactLeftImage} alt="" />
      <div className="contact_wrapper">
        <h2>Contact Us</h2>
        <div className="form_div">
          <h3>Message</h3>
          <form className="form">
            <div className="input_div">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="Write your username..."
                name="username"
                id="username"
              />
            </div>
            <div className="input_div">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Write your email Address..."
                name="email"
                id="email"
              />
            </div>
            <div className="input_div">
              <label htmlFor="message">Message</label>
              <textarea
                style={{
                  resize: "none",
                  height: "30px",
                  borderRadius: "10px",
                  width: "100%",
                }}
                name="message"
                id=""
              >
                Write your message...
              </textarea>
            </div>
          </form>
          <button className="send_btn" type="submit">
            Send Message
          </button>
        </div>
        <h4>Get In Touch</h4>
        <div className="social">
          <TfiEmail className="social_icon" />
          <TfiLinkedin className="social_icon" />
          <FaGithub className="social_icon" />
          <FaWhatsapp className="social_icon" />
        </div>
        <div className="contact_us_div">
          <Link className="email all">khabarkhaw@gmail.com</Link>
          <p className="all">+880 1300 111 222</p>
          <p className="all">Mirpur-12, Dhaka, Bangladesh</p>
        </div>
      </div>
      <img className="right_image" src={ContactRightImage} alt="" />
    </div>
  );
};

export default Contact;
