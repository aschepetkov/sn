import React from "react";
import { Link, useSearchParams } from 'react-router-dom';
const Blog = () => {
    const [posts, setPosts] = React.useState([]);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('search') || '';

    const [search, setSearch] = React.useState(query);

    const searchHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const formValue = form.search.value;

        setSearchParams({search: formValue});
    }

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            json.length = 30;
            setPosts(json);
        });

    return (
        <>
            <h1>Блог - список постов</h1>

            <form autoComplete="off" onSubmit={searchHandler}>
                <input name="search" value={search} onChange={(e) => setSearch(e.target.value) }/>
                <button type="submit">Поиск</button>
            </form>
            <ul>
                {posts && posts.filter(
                    post => post.title.includes(query)
                ).map(({title, body, id}) => {
                    return (
                        <li key={title}>
                            <Link to={`/blog/${id}`}><h3>{title}</h3></Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default Blog;
