import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    const {userId, lookingForAJob, lookingForAJobDescription, fullName, contacts, photos} = props.profile;
    return (
        <div className={s.profileInfo}>
            <div className={s.backgroundHeader}>
                <img src={'https://www.bhmpics.com/wallpapers/boats_on_dirty_river-852x480.jpg'} />
            </div>
            <div>
               <div className={s.avatarUser}>
                   <img src={photos.large ? photos.large : 'https://cs5.pikabu.ru/post_img/big/2015/10/14/6/1444816712_1779523016.jpg'} />
               </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfileInfo;