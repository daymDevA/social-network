export const requiredField = (value) => {
  if (!value) return "Field is required";
};

export const invalidEmail = (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    return "Invalid email address";
};

export const minLengthCreator = (minLength) => (value) => {
  if (value.length < minLength)
    return `Field must have no least ${minLength} symbols`;
};
