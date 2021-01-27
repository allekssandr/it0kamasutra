import React from "react";
import s from './Dialogs.module.css'
import ContactList from "./ContactList/ContactList";
import MessageList from "./MessageList/MessageList";
import {Route} from "react-router-dom";

const dialogs = [
    {
        id: 1,
        name: 'Ivan',
        messages: [
            {
                id: 1,
                message: 'Ivan Привет 1',
            },
            {
                id: 1,
                message: 'Ivan Привет 2',
            },
            {
                id: 1,
                message: 'Ivan Привет 3',
            },
        ],
    },
    {
        id: 2,
        name: 'Peter',
        messages: [
            {
                id: 1,
                message: 'Peter Привет 1',
            },
            {
                id: 1,
                message: 'Peter Привет 2',
            },
            {
                id: 1,
                message: 'Peter Привет 3',
            },
        ],
    },
    {
        id: 3,
        name: 'Sasha',
        messages: [
            {
                id: 1,
                message: 'Sasha Привет 1',
            },
            {
                id: 1,
                message: 'Sasha Привет 2',
            },
            {
                id: 1,
                message: 'Sasha Привет 3',
            },
        ],
    },
    {
        id: 4,
        name: 'Oleg',
        messages: [
            {
                id: 1,
                message: 'Oleg Привет 1',
            },
            {
                id: 1,
                message: 'Oleg Привет 2',
            },
            {
                id: 1,
                message: 'Oleg Привет 3',
            },
        ],
    },
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <ContactList dialogs={dialogs}/>
            <Route path={'/message:id?'}>
                <MessageList dialogs={dialogs}/>
            </Route>
        </div>
    )
}

export default Dialogs;