import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addActionCreator, postActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postElement = React.createRef();

    const postClick = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = postElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>Мои посты</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    className={classes.textarea}
                    ref={postElement}
                    value={props.newPost}
                ></textarea>

                <button onClick={postClick}>Добавить пост</button>

            </div>
            <div className={classes.posts}>
                {
                    props.posts.map(post => {
                        return <Post message={post.message} likes={post.likes} />
                    })
                }
            </div>

        </div>
    );
}

export default MyPosts;
