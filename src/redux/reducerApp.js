import { setUserData } from "./reducerAuth";

const INITIALIZATED_APP_SUCCESSFUL = "INITIALIZATED_APP_SUCCESSFUL";

const initialState = {
  initializatedAppSuccessful: false,
};

const reducerApp = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATED_APP_SUCCESSFUL:
      return {
        ...state,
        initializatedAppSuccessful: true,
      };

    default:
      return { ...state };
  }
};

export const setInitializatedAppSuccessful = () => ({
  type: "INITIALIZATED_APP_SUCCESSFUL",
});

export const initializatedApp = () => (dispatch) => {
  const promise = dispatch(setUserData());

  promise.then((response) => {
    dispatch(setInitializatedAppSuccessful());
  });
};

export default reducerApp;
