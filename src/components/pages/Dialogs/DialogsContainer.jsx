import React from 'react';
import {addMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState();

    const onChange = (text)=> {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

    const onClick = () => {
        props.store.dispatch(addMessageCreator());
    }

    return (
        <Dialogs
            state={state}
            onChangePost={onChange}
            onButtonClick={onClick}
            newMessage={state.messagePage.newMessage}
        />
    );
}

export default DialogsContainer;
