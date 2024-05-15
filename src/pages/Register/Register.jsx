import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register_container">
      <div className="register_wrapper">
        <div className="form_div">
          <h3>Register</h3>
          <form className="form">
            <div className="input_div">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                placeholder="Write your first name..."
                name="fname"
                id="fname"
              />
            </div>
            <div className="input_div">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                placeholder="Write your last name..."
                name="lname"
                id="lname"
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Write your password..."
                name="password"
                id="password"
              />
            </div>
          </form>
          <div className="form_bottom">
            <button className="send_btn" type="submit">
              <Link className="link_btn" to="/login">
                Register
              </Link>
            </button>
            <p className="login_desc">
              Already i have an account{" "}
              <Link className="login_btn" to="/login">
                <button>Login</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
