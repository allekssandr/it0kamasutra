import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    props.state.dialogs.map(dialog => (
                        <DialogItem id={dialog.id} name={dialog.name} />
                    ))
                }
            </div>
            <div className={s.messages}>
                {
                    props.state.messages.map(message => (
                        <Message message={message.message} />
                    ))
                }
            </div>
        </div>
    )
}

export default Dialogs;