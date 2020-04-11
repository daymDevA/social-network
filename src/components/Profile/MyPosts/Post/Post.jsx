import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { WrapperPost, WrapperLikes } from "./StyledPost";
//<i class="fas fa-thumbs-up"></i>
//<i class="fas fa-thumbs-down"></i>

const Post = ({ message, countLikes, countDisLikes }) => {
  return (
    <WrapperPost>
      <img
        src="https://www.tetairawhitiartsfestival.nz/assets/EventImages/MAUI-PUTAHI-2.jpg"
        alt=""
      />
      <article>{message}</article>
      <WrapperLikes>
        <div>23 march 19.54</div>
        <div>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{countLikes}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faThumbsDown} />
            <span>{countDisLikes}</span>
          </div>
        </div>
      </WrapperLikes>
    </WrapperPost>
  );
};

export default Post;
