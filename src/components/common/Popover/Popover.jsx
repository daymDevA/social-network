import React from "react";
import { Arrow, BoxPopover, Box } from "./StyledPopover";

const Popover = ({ title, content }) => {
  console.log("popover");
  return (
    <BoxPopover>
      <Arrow></Arrow>
      <Box>
        <span>{title}</span>
      </Box>
      <Box>
        <p>{content}</p>
      </Box>
    </BoxPopover>
  );
};

export default Popover;
