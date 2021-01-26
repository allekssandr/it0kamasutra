import React from "react";

const Contact = (props) => {
    const {contact} = props;
    return (
        <div>
            <span>{contact.name}</span>
        </div>
    )
}

export default Contact;