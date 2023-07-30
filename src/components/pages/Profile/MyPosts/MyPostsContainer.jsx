// import React from 'react';
import {addActionCreator, postActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer2 = (props) => {
//     let state = props.store.getState();
//     const postClick = () => {
//         props.store.dispatch(addActionCreator())
//     }
//
//     const onPostChange = (text) => {
//         props.store.dispatch(postActionCreator(text))
//     }
//
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={postClick}
//             posts={state.profilePage.posts}
//             newPost={state.profilePage.newPost}
//         />
//     );
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(postActionCreator(text));
        },
        addPost: () => {
            dispatch(addActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
