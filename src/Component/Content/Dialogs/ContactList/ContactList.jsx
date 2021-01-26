import React from "react";
import Contact from "./Contact/Contact";

const contacts = [
    {
        id: 1,
        name: 'Ivan',
    },
    {
        id: 2,
        name: 'Peter',
    },
    {
        id: 3,
        name: 'Sasha',
    },
    {
        id: 4,
        name: 'Oleg',
    },
]

const ContactList = (props) => {
    return (
        <div>
            {
                contacts.map(contact => (
                        <Contact contact={contact}/>
                    )
                )
            }
        </div>
    )
}

export default ContactList;