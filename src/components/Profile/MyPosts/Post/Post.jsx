import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://avatars.mds.yandex.net/i?id=07e6d2fd144c63f23e6b1b1b07f996fc4cca554d-5107328-images-thumbs&n=13" />
            <div className={c.text}>
                {props.message}
            </div>
            <span className={c.likes}>{props.likes}</span>
        </div>
    );
}

export default Post;
