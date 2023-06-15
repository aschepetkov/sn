import React from 'react';
import {addActionCreator, postActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    const postClick = () => {
        props.store.dispatch(addActionCreator())
    }

    const onPostChange = (text) => {
        props.store.dispatch(postActionCreator(text))
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={postClick}
            posts={state.profilePage.posts}
            newPost={state.profilePage.newPost}
        />
    );
}

export default MyPostsContainer;
