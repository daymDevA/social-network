import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";
import {
  WrapperLogIn,
  Title,
  FormLogin,
  WrappperTitle,
  WrapperButton,
  WrapperCheckbox,
} from "./StyledLogIn";
import { Button } from "../Profile/EditModeProfileInfo/StyledFormProfileInfo";
import { logIn } from "../../redux/reducerAuth";
import { connect } from "react-redux";
import { requiredField, maxLengthCreator } from "../util/Validation/Validation";
import { getCaptcha } from "../../redux/reducerProfilePage";
import { Redirect } from "react-router-dom";
import CustomField from "../common/CustomField/CustomField";
import { useState } from "react";

const LoginForm = (props) => {
  const { handleSubmit, reset } = props;

  const [picCaptcha, setPicCaptcha] = useState(props.captcha);

  useEffect(() => {
    setPicCaptcha(props.captcha);
  }, [props.captcha]);

  console.log(props.captcha);

  return (
    <FormLogin
      onSubmit={() => {
        handleSubmit();
        // reset();
      }}
    >
      <WrappperTitle>
        <Title>Log In</Title>
      </WrappperTitle>

      <Field
        name="login"
        component="input"
        validate={[requiredField]}
        type="text"
        placeholder="Login.."
      ></Field>

      <Field
        name="password"
        component="input"
        validate={[requiredField]}
        type="password"
        placeholder="Password.."
      ></Field>

      <WrapperCheckbox>
        <Field name="rememberMe" component="input" type="checkbox" />
        <span>Remember me</span>
      </WrapperCheckbox>
      <div>
        {picCaptcha ? <img src={picCaptcha} alt="" /> : ""}
        <Field
          name="captcha"
          component="input"
          type="text"
          placeholder="write symbols.."
        />
      </div>
      <WrapperButton>
        <Button type="submit">Log in</Button>
      </WrapperButton>
    </FormLogin>
  );
};

const ContactForm = reduxForm({ form: "login" })(LoginForm);

class LogIn extends React.Component {
  onSubmit = (formData) => {
    this.props.logIn(
      formData.login,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  componentDidMount() {
    this.props.getCaptcha();
  }

  render() {
    return (
      <>
        <WrapperLogIn>
          <ContactForm onSubmit={this.onSubmit} captcha={this.props.captcha} />
        </WrapperLogIn>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.profilePage);
  return {
    isAuth: state.auth.isAuth,
    captcha: state.profilePage.captcha,
  };
};
export default connect(mapStateToProps, { logIn, getCaptcha })(LogIn);
