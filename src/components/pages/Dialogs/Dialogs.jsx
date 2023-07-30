import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialog-reducer";

const Dialogs = (props) => {

    const state = props.messagePage;

    const onChange = (e)=> {
        const text = e.target.value;

        props.onChangePost(text);
    }

    const onClick = () => {
        props.onButtonClick();
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsIitems}>
                {
                    state.dialog.map(dialog => {
                        return <DialogItem key={dialog.name} name={dialog.name} id={dialog.id} />
                    })
                }
            </div>
            <div className={classes.dialogsMessages}>
                {
                    state.message.map(message => {
                        return <Message key={message.message} message={message.message} id={message.id} />
                    })
                }
                <div className={classes.formSubmit}>
                    <textarea onChange={onChange} value={state.newMessage}/>
                    <button onClick={onClick}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
