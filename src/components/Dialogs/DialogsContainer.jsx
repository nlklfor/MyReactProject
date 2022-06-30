import React from "react";
import "./Dialogs.css"
import { addMesssageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();
    let sendMessage = () => {
        props.store.dispatch(addMesssageActionCreator());
    }
    let changeMessageText = (message) => {
        let action = updateMessageTextActionCreator(message);
        props.store.dispatch(action)
    }

    return (
        <Dialogs OnSendMessage={sendMessage} OnChangeMessageText={changeMessageText} dialogsState={state.dialogsState} />
    )


}

export default DialogsContainer;
