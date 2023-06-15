import React from 'react';
import classes from './News.module.css';

const News = () => {

    const newsPost = React.createRef();

    const addNews = () => {
        const text = newsPost.current.value;
        alert(text);
        newsPost.current.value = '';
    };

    return (
        <div>
            <div>
                <h1>Новости</h1>
            </div>

            <div>
                <h2>Опубликовать новость</h2>
                <textarea ref={newsPost}></textarea>
                <button onClick={addNews}>Добавить новость</button>
            </div>
        </div>
    );
}

export default News;
