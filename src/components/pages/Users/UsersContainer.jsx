import React from 'react';
import { connect } from "react-redux";
import {followingAC, setCurrentAC, setToggleFetchingAC, setUsersAC, unFollowingAC} from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import styles from './users.module.css';

class UsersComponent extends React.Component {

    componentDidMount() {
        console.log('Компонент вмонтирован');
        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.items}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setCurrent(1);
            });
    }

    componentWillUnmount() {
        console.log('Компонент демонтирован');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Компонент обновлён', prevProps, prevState, snapshot);
    }

    buttonHandler = (p) => {

        this.props.setToggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.items}`)
            .then(response => {
                this.props.setToggleFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setCurrent(p);
            });
    }

    render() {

        return (
            <>
                {this.props.isFetching ? (
                    <div className={styles.loader}>
                        <img src='./preload.gif' alt="" />
                    </div>
                ) : null }
                <Users
                    pages={this.props.pages}
                    items={this.props.items}
                    currentPage={this.props.currentPage}
                    buttonHandler={this.buttonHandler}
                    setUnFollow={this.props.setUnFollow}
                    setFollow={this.props.setFollow}
                    users={this.props.users}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pages: state.usersPage.pages,
        items: state.usersPage.items,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFollow: (userId) => {
            dispatch(followingAC(userId));
        },
        setUnFollow: (userId) => {
            dispatch(unFollowingAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrent: (currentPage) => {
            dispatch(setCurrentAC(currentPage));
        },
        setToggleFetching: (isFetching) => {
            dispatch(setToggleFetchingAC(isFetching));
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent)
