import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="register_container">
      <div className="register_wrapper">
        <div className="form_div">
          <h3>Register</h3>
          <form className="form">
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
              <Link className="link_btn" to="/">
                Login
              </Link>
            </button>
            <p className="login_desc">
              Forgot Password{" "}
              <Link className="login_btn" to="/reset">
                <button>Reset</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
