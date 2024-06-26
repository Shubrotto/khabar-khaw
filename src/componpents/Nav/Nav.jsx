import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
  return (
    <ul className="nav_list">
      <li className="nav_item">
        <Link to="/" className="nav_link">
          Home
        </Link>
      </li>
      <li className="nav_item">
        <Link to="/items" className="nav_link">
          Items
        </Link>
      </li>
      <li className="nav_item">
        <Link to="/about" className="nav_link">
          About
        </Link>
      </li>
      <li className="nav_item">
        <Link to="/contact" className="nav_link">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
