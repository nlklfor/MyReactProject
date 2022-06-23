import React from "react";
import "./../Dialogs.css"

const Message = (props) => {
    
    return (
        <div className="messages">
            <div className="messages__content">{props.message}</div>
        </div>
    )
}


export default Message;