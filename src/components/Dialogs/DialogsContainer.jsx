import Dialogs from "./Dialogs";
import {
  addMessageActionCreater,
  getChatData,
  getDiadlogData,
  getDatanewMessageText,
} from "../../redux/reducerDialogsPage";

import { connect } from "react-redux";
import withAuthReducer from "../../hoc/withAuthReducer";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    chatData: getChatData(state),
    diadlogData: getDiadlogData(state),
    newMessageText: getDatanewMessageText(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageText) => {
      dispatch(addMessageActionCreater("my", newMessageText));
    },
  };
};

export default compose(
  withAuthReducer,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
