import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";

const Dialogs = (props) => {

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
                    props.state.messagePage.dialog.map(dialog => {
                        return <DialogItem name={dialog.name} id={dialog.id} />
                    })
                }
            </div>
            <div className={classes.dialogsMessages}>
                {
                    props.state.messagePage.message.map(message => {
                        return <Message message={message.message} id={message.id} />
                    })
                }
                <div className={classes.formSubmit}>
                    <textarea onChange={onChange} value={props.newMessage}/>
                    <button onClick={onClick}>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
