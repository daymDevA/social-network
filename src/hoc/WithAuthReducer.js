import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapToState = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const withAuthReducer = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"} />;

    return <Component {...props} />;
  };

  const ContainerRedirectComponent = connect(mapToState, {})(RedirectComponent);

  return ContainerRedirectComponent;
};

export default withAuthReducer;
