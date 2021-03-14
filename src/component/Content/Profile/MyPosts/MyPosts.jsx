import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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