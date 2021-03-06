import React from "react";
import s from "./Users.module.css";
import User from "./User/User";


const Users = (props) => {
    
    const countPages = Math.ceil(props.totalUsersCount/100/props.count);
    props.setCountPages(countPages);
    
    return (
        <div className={s.users}>
            <div className={s.pagination}>
                {props.createPagination().map(el => el)}
            </div>
            <div className={s.usersList}>
                {
                    props.users.map(user => {
                        return <User unfollow={props.unfollow} follow={props.follow} followInProgress={props.followInProgress} user={user} />
                    })
                }
            </div>
            <div className={s.btnShow}>
                <button>
                    SHOW MORE
                </button>
            </div>
        </div>
    )
}


export default Users;