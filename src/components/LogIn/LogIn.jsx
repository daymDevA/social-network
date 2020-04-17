import React from "react";
import { reduxForm, Field } from "redux-form";
import {
  WrapperLogIn,
  Title,
  FormLogin,
  WrappperTitle,
  WrapperButton,
  WrapperCheckbox,
} from "./StyledLogIn";
import { Button } from "../Profile/EditModeProfileInfo/StyledEditModeProfileInfo";
import { logIn } from "../../redux/reducerAuth";
import { connect } from "react-redux";
import { Errors } from "../common/validation/Erros";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
  const { handleSubmit, reset } = props;
  return (
    <FormLogin
      onSubmit={() => {
        handleSubmit();
        reset();
      }}
    >
      <WrappperTitle>
        <Title>Log In</Title>
      </WrappperTitle>

      <Field
        name="login"
        component={Errors}
        type="text"
        placeholder="Login.."
      ></Field>

      <Field
        name="password"
        component={Errors}
        type="password"
        placeholder="Password.."
      ></Field>

      <WrapperCheckbox>
        <Field name="rememberMe" component="input" type="checkbox" />{" "}
        <span>Remember me</span>
      </WrapperCheckbox>
      <WrapperButton>
        <Button type="submit">Log in</Button>
      </WrapperButton>
    </FormLogin>
  );
};

const ContactForm = reduxForm({ form: "login" })(LoginForm);

const LogIn = (props) => {
  const onSubmit = (formData) => {
    props.logIn(formData.login, formData.password, formData.rememberMe);

    // promise.then((response) => {
    //   if (this.props.isAuth) {
    //     this.props.history.push("/profile");
    //   }
    // });
  };

  return (
    <>
      <WrapperLogIn>
        <ContactForm onSubmit={onSubmit} />
      </WrapperLogIn>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    state: state,
  };
};
export default connect(mapStateToProps, { logIn })(LogIn);
