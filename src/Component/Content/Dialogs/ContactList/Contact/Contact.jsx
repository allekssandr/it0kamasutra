import React from "react";
import {Link} from "react-router-dom";

const Contact = (props) => {
    const {dialog} = props;
    return (
        <div>
            <Link to={`/message/${dialog.id}`}>{dialog.name}</Link>
        </div>
    )
}

export default Contact;