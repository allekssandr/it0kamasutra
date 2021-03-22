import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/* const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    const onChangeNewMessage = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs
            addMessage={addMessage}
            updateNewMessageText={onChangeNewMessage}
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
        />
    )
}*/

let mapStateToProps = (state) => (
    {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
);

let mapDispatchToProps = (dispatch) => (
    {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;