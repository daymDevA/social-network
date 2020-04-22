import React, { useEffect } from "react";

import {
  WrapperLogIn,
  Title,
  FormLogin,
  WrappperTitle,
  WrapperButton,
  WrapperModuleCaptcha,
  WrapperCheckbox,
} from "./StyledLogIn";
import { Button } from "../Profile/EditModeProfileInfo/StyledFormProfileInfo";
import { logIn } from "../../redux/reducerAuth";
import { connect } from "react-redux";
import {
  requiredField,
  invalidEmail,
  minLengthCreator,
} from "../util/Validation/Validation";

import { getCaptcha } from "../../redux/reducerProfilePage";
import CustomField from "../common/CustomField/CustomField";
import { useState } from "react";
import { Formik } from "formik";

const LoginForm = ({ getCaptcha, captcha, isAuth, logIn }) => {
  const [pictureCaptcha, setPictureCaptcha] = useState(captcha);

  useEffect(() => {
    getCaptcha();
  }, []);

  useEffect(() => {
    setPictureCaptcha(captcha);
  }, [captcha, isAuth]);

  return (
    <WrapperLogIn>
      <Formik
        initialValues={{
          login: "",
          password: "",
          rememberMe: false,
          captcha: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          logIn(
            values.login,
            values.password,
            values.rememberMe,
            values.captcha
          );
        }}
      >
        {(props) => {
          return (
            <FormLogin>
              <WrappperTitle>
                <Title>Log In</Title>
              </WrappperTitle>

              <CustomField
                name="login"
                type="text"
                validate={
                  (requiredField,
                  invalidEmail,
                  () => minLengthCreator(12)(props.values.login))
                }
                placeholder="Login.."
              ></CustomField>

              <CustomField
                name="password"
                validate={
                  (requiredField, () => minLengthCreator(8)(props.values.login))
                }
                type="password"
                placeholder="Password.."
              ></CustomField>

              <WrapperCheckbox>
                <CustomField name="rememberMe" type="checkbox" />
              </WrapperCheckbox>

              <WrapperModuleCaptcha>
                {pictureCaptcha ? <img src={pictureCaptcha} alt="" /> : ""}
                <CustomField
                  name="captcha"
                  type="text"
                  validate={
                    (requiredField,
                    () => minLengthCreator(4)(props.values.login))
                  }
                  placeholder="Write symbols.."
                />
              </WrapperModuleCaptcha>

              <WrapperButton>
                <Button type="submit">Log in</Button>
              </WrapperButton>
            </FormLogin>
          );
        }}
      </Formik>
    </WrapperLogIn>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.profilePage.captcha,
  };
};
export default connect(mapStateToProps, { logIn, getCaptcha })(LoginForm);
