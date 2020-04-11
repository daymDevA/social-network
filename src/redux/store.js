import moment from "moment";
import reducerDialogsPage from "./reducerDialogsPage";
import reducerProfilePage from "./reducerProfilePage";

let store = {
  _state: {
    profilePage: {
      postData: [
        {
          id: 1,
          message: "hi how are you",
          countLikes: 23,
          countDisLikes: 3,
        },
        {
          id: 2,
          message: "hi how are you",
          countLikes: 23,
          countDisLikes: 3,
        },
        {
          id: 3,
          message: "hi how are you",
          countLikes: 23,
          countDisLikes: 3,
        },
        {
          id: 4,
          message: "hi how are you",
          countLikes: 23,
          countDisLikes: 3,
        },
        {
          id: 5,
          message: "hi how are you",
          countLikes: 23,
          countDisLikes: 3,
        },
      ],
      newPostText: "",
    },
    dialogsPage: {
      chatData: [
        {
          id: 1,
          name: "Alexandra",
          data: "currentTime()",
          countMessages: 99,
          lastMessage:
            "Sdosdrfsdfddddddd ddddd ddddddddddddd ddddddddddddddddddddry, for late ",
        },
        {
          id: 2,
          name: "Sasha",
          data: "currentTime()",
          countMessages: 8,
          lastMessage:
            "Sdosdrfsdfddddddd ddddd ddddddddddddd ddddddddddddddddddddry, for late ",
        },
        {
          id: 3,
          name: "Anastasia",
          data: "currentTime()",
          countMessages: 24,
          lastMessage:
            "Sdosdrfsdfddddddd ddddd ddddddddddddd ddddddddddddddddddddry, for late ",
        },
        {
          id: 4,
          name: "Katya",
          data: "currentTime()",
          countMessages: 48,
          lastMessage:
            "Sdosdrfsdfddddddd ddddd ddddddddddddd ddddddddddddddddddddry, for late ",
        },
        {
          id: 5,
          name: "Vlad",
          data: "currentTime()",
          countMessages: 8,
          lastMessage:
            "Sdosdrfsdfddddddd ddddd ddddddddddddd ddddddddddddddddddddry, for late ",
        },
        {
          id: 6,
          name: "Max",
          data: "currentTime()",
          countMessages: 2,
          lastMessage:
            "Sdosdrfsdfddddddd ddddd ddddddddddddd ddddddddddddddddddddry, for late ",
        },
      ],
      diadlogData: [
        {
          id: 1,
          data: "currentTime()",
          typeMessage: "my",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 2,
          data: "currentTime()",
          typeMessage: "friend",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 3,
          data: "currentTime()",
          typeMessage: "my",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 4,
          data: "currentTime()",
          typeMessage: "my",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 5,
          data: "currentTime()",
          typeMessage: "friend",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 6,
          data: "currentTime()",
          typeMessage: "my",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 7,
          data: "currentTime()",
          typeMessage: "friend",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
        {
          id: 8,
          data: "currentTime()",
          typeMessage: "friend",
          message:
            " some te;sdlfksdfs sdfsldkf dsf ger ewd dsfdsfe sd se dfdfwe ds",
        },
      ],
      newMessageText: "",
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this.rerenderTree = observer;
  },

  rerenderTree() {
    console.log("changed");
  },

  dispatch(action) {
    this.getState().dialogsPage = reducerDialogsPage(
      this.getState().dialogsPage,
      action
    );

    this.getState().profilePage = reducerProfilePage(
      action,
      this.getState().profilePage
    );

    this.rerenderTree(this.getState());
  },
};

export const currentTime = () => moment().format("LT");

export default store;
