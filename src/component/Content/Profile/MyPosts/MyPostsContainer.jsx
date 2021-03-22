import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

/*const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewMyPost={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}*/

let mapStateToProps = (state) => (
    {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
);

let mapDispatchToProps = (dispatch) => (
    {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewMyPost: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
)

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;