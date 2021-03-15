import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    const onPostChange = (event) => {
        const {value} = event.target;
        props.updateNewPostText(value)
    }

    return (
        <div>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    name={'newPost'}
                    value={props.newPostText}
                />
                <button onClick={addPost}>Add post</button>
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