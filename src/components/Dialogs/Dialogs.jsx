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

const Dialogs = ({
  sendMessage,
  onChange,
  chatData,
  diadlogData,
  newMessageText,
}) => {
  const onTextChange = (event) => {
    onChange(event.target.value);
  };

  const addMessage = () => {
    sendMessage();
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
      <WrapperPost>
        <Textarea onChange={onTextChange} value={newMessageText}></Textarea>
        <Button onClick={addMessage}>Sent</Button>
      </WrapperPost>
    </WrapperDialogSection>
  );
};

export default Dialogs;
