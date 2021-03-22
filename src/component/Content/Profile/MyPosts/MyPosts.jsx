import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {

    let onAddPost = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        const {value} = event.target;
        props.updateNewMyPost(value);
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    name={'newPost'}
                    value={props.newPostText}
                />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {
                    props.posts.map(post => (
                        <Post post={post}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MyPosts;