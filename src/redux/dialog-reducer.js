const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

const initialReducer = {
    dialog: [
        {id: '0', name: 'Andrew'},
        {id: '1', name: 'Ann'},
        {id: '2', name: 'Max'},
        {id: '3', name: 'Vlad'},
    ],
    message: [
        {id: '0', message: 'Hello'},
        {id: '1', message: 'Hi, I\'m from London'},
        {id: '2', message: 'Good job'},
    ],
    newMessage: '',
};
const dialogReducer = (state = initialReducer, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const result = {
                id: 3,
                message: state.newMessage
            }
            state.message.push(result);
            state.newMessage = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (message) => {
    return {
        type: UPDATE_MESSAGE,
        newMessage: message
    }
}

export const addMessageCreator = () => {
    return{
        type: ADD_MESSAGE,
    }
}

export default dialogReducer;
