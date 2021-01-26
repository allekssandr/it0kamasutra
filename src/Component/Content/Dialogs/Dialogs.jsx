import React from "react";
import s from './Dialogs.module.css'
import ContactList from "./ContactList/ContactList";
import MessageList from "./MessageList/MessageList";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <ContactList />
            <MessageList />
        </div>
    )
}

export default Dialogs;