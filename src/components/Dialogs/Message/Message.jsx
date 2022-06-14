import React from "react";
import "./../Dialogs.css"

const Message = (props) => {
    let NewMessage = React.createRef()
    let sendMessage = () => {
        // let showNewMessage = NewMessage.current.value
        alert(NewMessage.current.value);
    }
    return (
        <div className="messages">
            <textarea ref={NewMessage}></textarea>
            <button onClick={sendMessage} className="sendMessage">Отправить сообщение</button>
            <div className="messages__content">{props.message}</div>
        </div>
    )
}


export default Message;