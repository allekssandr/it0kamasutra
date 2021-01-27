import React from "react";
import Message from "./Message/Message";



const MessageList = (props) => {
    const {dialogs} = props;
    const id = props.match.params.id;
    const dialog = dialogs.find(dialog => dialog.id = id);
    return (
        <div>
            {
                dialog.messages.map( message => (
                    <Message message={message} />
                ))
            }
        </div>
    )
}

export default MessageList;