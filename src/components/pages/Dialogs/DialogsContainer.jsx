import React from 'react';
import {addMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer2 = (props) => {
//     const state = props.store.getState();
//
//     const onChange = (text)=> {
//         props.store.dispatch(updateNewMessageBodyCreator(text));
//     }
//
//     const onClick = () => {
//         props.store.dispatch(addMessageCreator());
//     }
//
//     return (
//         <Dialogs
//             state={state}
//             onChangePost={onChange}
//             onButtonClick={onClick}
//             newMessage={state.messagePage.newMessage}
//         />
//     );
// }

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        },
        onButtonClick: () => {
            dispatch(addMessageCreator())
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
