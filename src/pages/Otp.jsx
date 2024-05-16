import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="register_container">
      <div className="register_wrapper">
        <div className="form_div">
          <h3>Reset</h3>
          <form className="form">
            <div className="input_div">
              <label htmlFor="email">Otp</label>
              <input
                type="number"
                placeholder="Write your Otp code..."
                name="number"
                id="number"
              />
            </div>
          </form>
          <div className="form_bottom">
            <button className="send_btn" type="submit">
              <Link className="link_btn" to="/login">
                Confirm
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
