import React from "react";
import SingleDialog from "./SingleDialog/SingleDialog";
import Message from "./Message/Message";
import "./Dialogs.css"

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((dialog) => <SingleDialog name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messagesData.map((everyMessage) => <Message message={everyMessage.message} />)

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
