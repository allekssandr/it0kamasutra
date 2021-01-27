import React from "react";
import Contact from "./Contact/Contact";

const ContactList = (props) => {
    const {dialogs} = props;
    return (
        <div>
            {
                dialogs.map(dialog => (
                        <Contact dialog={dialog}/>
                    )
                )
            }
        </div>
    )
}

export default ContactList;