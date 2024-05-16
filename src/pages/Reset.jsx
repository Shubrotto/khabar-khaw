import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className="register_container">
      <div className="register_wrapper">
        <div className="form_div">
          <h3>Reset</h3>
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
          </form>
          <div className="form_bottom">
            <button className="send_btn" type="submit">
              <Link className="link_btn" to="/otp">
                Next
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
