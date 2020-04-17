import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";

import { StyledArrow } from "./StyledArrow";

const Arrow = ({ side, nextPage }) => {
  return (
    <StyledArrow>
      <FontAwesomeIcon
        onClick={() => nextPage(side)}
        icon={side === "right" ? faArrowAltCircleRight : faArrowAltCircleLeft}
      />
    </StyledArrow>
  );
};

export default Arrow;
