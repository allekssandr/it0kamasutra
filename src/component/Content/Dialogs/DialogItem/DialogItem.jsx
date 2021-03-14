import React from "react";
import {Link} from "react-router-dom";
import s from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <img src={'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar-200x200.png.webp'} alt={'avatar'}/>
            <Link to={`/message/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default DialogItem;