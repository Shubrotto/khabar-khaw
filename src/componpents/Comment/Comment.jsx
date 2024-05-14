import { TfiEmail, TfiLinkedin } from "react-icons/tfi";
import "./comment.scss";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Comment = () => {
  return (
    <div className="comment_container">
      <div className="comment_wrapper">
        <h2>Comment Down About Our Food We will try best</h2>
        <div className="input">
          <input className="comment_input" type="text" name="" id="" />
          <input className="comment_btn" type="button" value="Comment" />
        </div>
        <div className="social">
          <TfiEmail className="social_icon" />
          <TfiLinkedin className="social_icon" />
          <FaGithub className="social_icon" />
          <FaWhatsapp className="social_icon" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
