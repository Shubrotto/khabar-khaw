import { Link } from "react-router-dom";
import Nav from "../../componpents/Nav/Nav";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <Link to="/" className="header_title">
            Kh<span>a</span>b<span>a</span>r Kh<span>a</span>w
          </Link>
          <hr className="border_top" />
          <hr className="border_bottom" />
        </div>
        <div className="navbar_right">
          <Nav />
          <button className="login_btn">
            <Link className="login_login_btn" to="/login">
              Log In
            </Link>
          </button>
          <button className="singup_btn">
            <Link className="singup_singup_btn" to="/register">
              Sing Up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
