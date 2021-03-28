import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader/Preloader";


const Profile = (props) => {
    return (
        <>
            {
                props.profile ?
                    <div className={s.profile}>
                        <ProfileInfo profile={props.profile}/>
                        <MyPostsContainer/>
                    </div>
                    : <Preloader/>
            }
        </>
    )
}

export default Profile;