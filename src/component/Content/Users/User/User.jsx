import React from "react";
import s from './User.module.css';

const User = (props) => {

    let {user} = props;

    const onFollow = () => {
        props.follow(user.id);
    }

    const onUnfollow = () => {
        props.unfollow(user.id);
    }

    return (
        <div className={s.user}>
            <div className={s.userFollow}>
                <div className={s.avatar}>
                    <img src={'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar-200x200.png.webp'}
                         alt={'avatar'}/>
                </div>
                <div>
                    <button className={s.btnFollow} onClick={user.followed ? onUnfollow : onFollow}>
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
