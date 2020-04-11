import React from "react";
import { StyledMessage } from "./StyledMessages";
const Messages = ({ message, data, typeMessage }) => {
  return (
    <div>
      <StyledMessage typeMessage={typeMessage}>
        {message}
        <span>{data}</span>
      </StyledMessage>
    </div>
  );
};

export default Messages;
