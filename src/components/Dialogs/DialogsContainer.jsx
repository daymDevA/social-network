import Dialogs from "./Dialogs";
import { addMessageActionCreater } from "../../redux/reducerDialogsPage";

import { connect } from "react-redux";
import withAuthReducer from "../../hoc/WithAuthReducer";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    chatData: state.dialogsPage.chatData,
    diadlogData: state.dialogsPage.diadlogData,
    newMessageText: state.dialogsPage.newMessageText,
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
