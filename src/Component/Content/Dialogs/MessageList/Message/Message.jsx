import React from "react";

const Message = (props) => {
    const {dialog} = props;
    return (
        <div>
            {
                dialog.messages.map(message => {
                    return (
                        <div>
                            <p>{message.message}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Message;