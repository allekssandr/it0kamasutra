import React from "react";
import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div>
            <div className={s.friendItem}>
                <img src={'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar-200x200.png.webp'} alt={'avatar'}/>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default FriendItem;