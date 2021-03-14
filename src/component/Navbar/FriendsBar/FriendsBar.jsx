import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import s from './FriendsBar.module.css';

const FriendsBar = (props) => {
    return (
        <div>
            <h1>Friends</h1>
            <div className={s.friends}>
                {
                    props.friends.map(friend => (
                        <FriendItem name={friend.name}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FriendsBar;

