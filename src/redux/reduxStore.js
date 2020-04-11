import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducerProfilePage from "./reducerProfilePage";
import reducerDialogsPage from "./reducerDialogsPage";
import reducerUsersFind from "./reducerUsersFind";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  profilePage: reducerProfilePage,
  dialogsPage: reducerDialogsPage,
  users: reducerUsersFind,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
