import React from "react";
import SingleDialog from "./SingleDialog/SingleDialog";
import Message from "./Message/Message";
import "./Dialogs.css"



const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsState.dialogsData.map((dialog) => <SingleDialog name={dialog.name} id={dialog.id} image={dialog.image} key={dialog.id} />)
    let messagesElements = props.dialogsState.messagesData.map((everyMessage) => <Message message={everyMessage.message} key={everyMessage.id} />)
    let NewMessage = React.createRef()
    let sendMessage = () => {
        props.OnSendMessage();
    }
    let changeMessageText = () => {
        let message = NewMessage.current.value;
        props.OnChangeMessageText(message)
    }

    return (
        <div className="dialogs">
            <div className="dialog__list">
                {dialogsElements}
            </div>
            <div className="messages__list">
                {messagesElements}
                <textarea onChange={changeMessageText} ref={NewMessage} value={props.newTextMessage} placeholder="Write a message!" />
                <button onClick={sendMessage} className="btn__sent-message">Send message</button>
            </div>
            
        </div>
    )


}

export default Dialogs;
