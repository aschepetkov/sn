const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

const initialState = {
    posts:[
        {id: '0', message: 'Hello', likes: '150'},
        {id: '1', message: 'Hi, I\'m from London', likes: '20'},
        {id: '2', message: 'How are you', likes: '22'},
    ],
    newPost: '',
};
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const result = {
                id: 3,
                message: state.newPost,
                likes: 0,
            }
            state.posts.push(result);
            state.newPost = '';
            return state;
        case UPDATE_POST:
            state.newPost = action.newText;
            return state;
        default:
            return state;
    }

}

export const addActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const postActionCreator = (text) => {
    return{
        type: UPDATE_POST,
        newText: text
    }
}

export default profileReducer;
