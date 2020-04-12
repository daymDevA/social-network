import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {
  WrapperDialogSection,
  WrapperChatsSection,
  Textarea,
  Button,
  WrapperPost,
} from "./StyledDialog";
import { Field, reduxForm } from "redux-form";

let FormNewMessage = ({ handleSubmit }) => {
  return (
    <WrapperPost>
      <form onSubmit={handleSubmit}>
        <Field name="newMessageText" component="textarea" type="text" />
        <Button>Sent</Button>
      </form>
    </WrapperPost>
  );
};

FormNewMessage = reduxForm({ form: "formNewMessage" })(FormNewMessage);

const Dialogs = ({ sendMessage, chatData, diadlogData }) => {
  const addMessage = (newMessageText) => {
    sendMessage(newMessageText);
  };

  return (
    <WrapperDialogSection>
      <section>
        {chatData.map((chat) => (
          <DialogItem
            key={chat.id}
            id={chat.id}
            name={chat.name}
            data={chat.data}
            countMessages={chat.countMessages}
            lastMessage={chat.lastMessage}
          />
        ))}
      </section>

      <WrapperChatsSection>
        {diadlogData.map((dialog) => (
          <Messages
            key={dialog.id}
            message={dialog.message}
            data={dialog.data}
            typeMessage={dialog.typeMessage}
          />
        ))}
      </WrapperChatsSection>
      <FormNewMessage
        onSubmit={(formData) => addMessage(formData.newMessageText)}
      />
    </WrapperDialogSection>
  );
};

export default Dialogs;
