import React from "react";
import "./Dialogs.css"
import { addMesssageActionCreator, updateMessageTextActionCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../API/StoreContext";


const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let sendMessage = () => {
                        store.dispatch(addMesssageActionCreator());
                    }
                    let changeMessageText = (message) => {
                        let action = updateMessageTextActionCreator(message);
                        store.dispatch(action)
                    }
                    return (
                        <Dialogs OnSendMessage={sendMessage} OnChangeMessageText={changeMessageText} dialogsState={state.dialogsState} />
                    )
                }
            }

        </StoreContext.Consumer>

    )


}

export default DialogsContainer;
