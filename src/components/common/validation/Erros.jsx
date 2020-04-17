import React from "react";
import { Wrapper } from "./StyledErrors";

export const validate = (value, meta) => {
  let error = "";
  if (!value && meta.touched) error = "feild required";

  if (value && value.length < 10 && meta.touched)
    error = "Must be 10 characters or bigger";

  return error;
};

export const Errors = (props) => {
  return (
    <Wrapper error={props.meta.touched && true}>
      <input {...props.input} />
      {props.meta.touched && (
        <span className="error">{validate(props.input.value, props.meta)}</span>
      )}
    </Wrapper>
  );
};
