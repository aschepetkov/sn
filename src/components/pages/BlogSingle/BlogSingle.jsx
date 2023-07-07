import { useParams } from "react-router-dom";
import c from './BlogSingle.module.css';
import React from "react";

const BlogSingle = () => {
    const { id } = useParams('id');

    const [comment, setComment] = React.useState([]);
    const [post, setPost] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((json) => {
                setComment(json);
            });


        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setPost(json);
            });
    }, [id])

    const {
        title,
        body,
    } = post;

    return (
        <>

            <h1>Заголовок: {title}</h1>
            <p>
                {body}
            </p>
            <hr />

            <h2 className={c.commentsTitle}>Комментарии</h2>

            {
                comment.map(({name, email, body}) => {
                    return (
                        <>
                            <h3>Автор: {name}</h3>
                            <p>Почта: {email}</p>
                            <blockquote>
                                {body}
                            </blockquote>
                            <hr />
                        </>
                    )
                })
            }
        </>
    );
};

export {
    BlogSingle,
}
