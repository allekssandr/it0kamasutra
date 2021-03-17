import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {

    const onChangeNewMessage = (event) => {
        const {value} = event.target;
        props.dispatch(updateNewMessageTextActionCreator(value))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

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
                <textarea value={props.state.newMessageText} onChange={onChangeNewMessage} />
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;