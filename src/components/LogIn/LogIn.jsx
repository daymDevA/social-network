import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  WrapperLogIn,
  Title,
  FormLogin,
  WrappperTitle,
  WrapperButton,
  Wrapper,
  WrapperCheckbox,
} from "./StyledLogIn";
import { Button } from "../Profile/EditModeProfileInfo/StyledEditModeProfileInfo";

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <FormLogin onSubmit={handleSubmit}>
      <WrappperTitle>
        <Title>Log In</Title>
      </WrappperTitle>
      <Wrapper>
        <Field
          name="login"
          component="input"
          type="text"
          placeholder="Login.."
        ></Field>
      </Wrapper>
      <Wrapper>
        <Field
          name="password"
          component="input"
          type="text"
          placeholder="Password.."
        ></Field>
      </Wrapper>
      <WrapperCheckbox>
        <Field name="submit" component="input" type="checkbox" />{" "}
        <span>Remember me</span>
      </WrapperCheckbox>
      <WrapperButton>
        <Button type="submit">Log in</Button>
      </WrapperButton>
    </FormLogin>
  );
};

const ContactForm = reduxForm({ form: "login" })(LoginForm);

const LogIn = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <WrapperLogIn>
      <ContactForm onSubmit={onSubmit} />
    </WrapperLogIn>
  );
};

export default LogIn;
