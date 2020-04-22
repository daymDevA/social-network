import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducerProfilePage from "./reducerProfilePage";
import reducerDialogsPage from "./reducerDialogsPage";
import reducerUsersFind from "./reducerUsersFind";
import reducerAuth from "./reducerAuth";

import reducerApp from "./reducerApp";

const reducers = combineReducers({
  profilePage: reducerProfilePage,
  dialogsPage: reducerDialogsPage,
  users: reducerUsersFind,
  auth: reducerAuth,
  app: reducerApp,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

const store = createStore(reducers, enhancer);

export default store;
