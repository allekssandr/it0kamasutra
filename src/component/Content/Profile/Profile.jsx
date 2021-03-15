import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                addPost={props.addPost}
                newPostText={props.state.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;