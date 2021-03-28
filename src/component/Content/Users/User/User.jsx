import React from "react";
import s from './User.module.css';
import {Link} from "react-router-dom";

const User = (props) => {

    let {user} = props;

    const onFollow = () => {
        props.setFollowUser(user.id);
    }

    const onUnfollow = () => {
        props.setUnfollowUser(user.id);
    }


    return (
        <div className={s.user}>
            <div className={s.userFollow}>
                <div className={s.avatar}>
                    <Link to={`/profile/${user.id}`}>
                        <img src={'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar-200x200.png.webp'}
                             alt={'avatar'}/>
                    </Link>
                </div>
                <div>
                    <button disabled={props.followInProgress.some(el => el === user.id)} className={s.btnFollow} onClick={user.followed ? onUnfollow : onFollow}>
                        {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
                    </button>
                </div>
            </div>
            <div className={s.userDescription}>
                <div className={s.fullName}>{user.name}</div>
                <div className={s.status}><div>{user.status ? user.status : 'Not status'}</div></div>
                <div className={s.locationCountry}>{'user.location.country'},</div>
                <div className={s.locationCity}>{'user.location.city'}</div>
            </div>
        </div>
    )
}

export default User;
