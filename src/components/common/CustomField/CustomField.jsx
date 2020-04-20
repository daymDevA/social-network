import React from "react";
import { InputCustom, Box, IconError } from "./StyledCustomField";
import Popover from "../Popover/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const CallOutSide = (ref, setIsShowDataError) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsShowDataError(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

const CustomField = ({ input, meta, ...props }) => {
  const [isShowDataError, setIsShowDataError] = useState(false);
  const wrapperRef = useRef(null);
  CallOutSide(wrapperRef, setIsShowDataError);

  return (
    <Box>
      {meta.touched && meta.error && isShowDataError ? (
        <Popover title="Error!!" content={meta.error} />
      ) : (
        ""
      )}
      {meta.touched && meta.error ? (
        <>
          <InputCustom {...input} {...props} red />
          <IconError ref={wrapperRef} onClick={() => setIsShowDataError(true)}>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </IconError>
        </>
      ) : (
        <InputCustom {...input} {...props} gray />
      )}
    </Box>
  );
};

export default CustomField;
