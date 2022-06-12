import React from "react";
import SingleDialog from "./SingleDialog/SingleDialog";
import Message from "./Message/Message";
import "./Dialogs.css"

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map((dialog) => <SingleDialog name={dialog.name} id={dialog.id} image={dialog.image} />)
    let messagesElements = props.state.messagesData.map((everyMessage) => <Message message={everyMessage.message} />)

    return (
        <div className="dialogs">
            <div className="dialog__list">
                {dialogsElements}
            </div>
            <div className="messages__list">
                {messagesElements}
            </div>
        </div>
    )


}

export default Dialogs;
