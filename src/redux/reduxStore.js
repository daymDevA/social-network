import { createStore, combineReducers, applyMiddleware } from "redux";
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

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
