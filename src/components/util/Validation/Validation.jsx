import React from "react";
import { Wrapper } from "../../common/CustomField/StyledCustomField";

export const requiredField = (value) => {
  if (value) return undefined;

  return "field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max lenght ${maxLength} or lest`;
};
