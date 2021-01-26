import React from "react";
import s from './Profile.module.css'
import Post from "./Post/Post";

const posts = [
    {
        id: 1,
        message: 'Привет 1',
        like: 0,
    },
    {
        id: 2,
        message: 'Привет 2',
        like: 0,
    },
    {
        id: 3,
        message: 'Привет 3',
        like: 0,
    },
    {
        id: 4,
        message: 'Привет 4',
        like: 0,
    },
]

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <span>Profile</span>
            <div>
                <img src={'https://www.bhmpics.com/wallpapers/boats_on_dirty_river-852x480.jpg'} />
            </div>
            <div>
                ava + description
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {
                    posts.map(post => (
                        <Post post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export default Profile;