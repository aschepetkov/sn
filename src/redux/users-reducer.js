const SET_FOLLOWING = 'SET-FOLLOWING';
const SET_UNFOLLOWING = 'SET-UNFOLLOWING';
const SET_USERS = 'SET-USERS';
const SET_CURRENT = 'SET-CURRENT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';

const initialState = {
    users: [  ],
    pages: 10,
    items: 7,
    currentPage: 1,
    isFetching: false
};
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FOLLOWING:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })

            }
        case SET_UNFOLLOWING:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_CURRENT:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }
}

export const followingAC = (userId) => {
    return {
        type: SET_FOLLOWING,
        userId,
    }
}
export const unFollowingAC = (userId) => {
    return {
        type: SET_UNFOLLOWING,
        userId,
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentAC = (currentPage) => {
    return {
        type: SET_CURRENT,
    }
}
export const setToggleFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching
    }
}

export default usersReducer;
