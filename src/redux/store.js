import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const store = {
    _state: {
        profilePage: {
            posts:[
                {id: '0', message: 'Hello', likes: '150'},
                {id: '1', message: 'Hi, I\'m from London', likes: '20'},
                {id: '2', message: 'How are you', likes: '22'},
            ],
            newPost: '',
        },
        messagePage: {
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
        },
    },
    _callSubscriber() {

    },
    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);
    },
};

export default store;

window.store = store;
