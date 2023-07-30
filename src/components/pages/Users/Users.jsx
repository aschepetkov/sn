import React from 'react';
import styles from './users.module.css';

const Users  = (props) => {

    console.log(props);

    const placeholder = '/user.png';

    const pages = [];

    for (let i = 1; i <= props.pages; i++) {
        pages.push(i);
    }

    return (
        <>
            <h1>Пользователи</h1>
            <div>
                <div className={styles.pagination}>
                    {
                        pages.map(p => {
                            return (
                                <span
                                    className={`${styles.page} ${(props.currentPage === p) && styles.activePage}`}
                                    onClick={() => {props.buttonHandler(p)}}
                                >{p}</span>
                            )
                        })
                    }
                </div>

                {props.users.map((u) => (
                    <div key={u.id} className={styles.item}>
                        <div>
                            <img src={u.photos?.small || placeholder} className={styles.ava} />
                            {
                                u.followed ? (
                                    <button onClick={() => {
                                        props.setUnFollow(u.id)
                                    }}>Unfollow</button>
                                ) : (
                                    <button onClick={() => {
                                        props.setFollow(u.id)
                                    }}>Follow</button>
                                )
                            }
                        </div>
                        <div>
                                <span>
                                    <div>
                                        <span>{u.name}</span>
                                        <span>{u.status || 'Нет статуса'}</span>
                                    </div>
                                </span>
                            <span>
                                    <div>
                                        <span>Россия</span>
                                        <span>Москва</span>
                                    </div>
                                </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Users;
