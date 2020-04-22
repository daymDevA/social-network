import React from "react";
import { InputCustom, Box, IconError } from "./StyledCustomField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useField } from "formik";
import { Checkbox, Popover } from "antd";

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

const CustomField = ({ placeholder, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [isShowDataError, setIsShowDataError] = useState(false);
  const wrapperRef = useRef(null);

  CallOutSide(wrapperRef, setIsShowDataError);

  const text = <span>Error!!</span>;
  const content = (
    <div>
      <p>{meta.error}</p>
    </div>
  );

  return (
    <Box>
      {meta.touched && meta.error && isShowDataError ? (
        <Popover
          placement="leftBottom"
          title={text}
          content={content}
          trigger="click"
          visible={isShowDataError}
        ></Popover>
      ) : (
        ""
      )}
      {meta.touched && meta.error ? (
        <>
          {props.type === "checkbox" ? (
            <Checkbox {...field} {...props} placeholder={placeholder}>
              Remember me
            </Checkbox>
          ) : (
            <>
              <InputCustom
                {...field}
                {...props}
                placeholder={placeholder}
                red
              />
              <IconError
                ref={wrapperRef}
                onClick={() => setIsShowDataError(true)}
              >
                <FontAwesomeIcon icon={faExclamationCircle} />
              </IconError>
            </>
          )}
        </>
      ) : (
        <>
          {props.type === "checkbox" ? (
            <Checkbox {...field} {...props} placeholder={placeholder}>
              Remember me
            </Checkbox>
          ) : (
            <InputCustom {...field} {...props} placeholder={placeholder} gray />
          )}
        </>
      )}
    </Box>
  );
};

export default CustomField;
