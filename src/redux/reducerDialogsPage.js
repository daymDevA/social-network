const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

const initialState = {
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
};

const reducerDialogsPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      const newItem = {
        id: state.diadlogData.length + 1,
        data: " currentTime()",
        typeMessage: action.typeMessage,
        message: action.newMessageText,
      };
      return {
        ...state,
        diadlogData: [...state.diadlogData, newItem],
        newMessageText: "",
      };

    default:
      return { ...state };
  }
};

export const addMessageActionCreater = (typeMessage, newMessageText) => ({
  type: "ADD_NEW_MESSAGE",
  typeMessage: typeMessage,
  newMessageText,
});

export default reducerDialogsPage;
