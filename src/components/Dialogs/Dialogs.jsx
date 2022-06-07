import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialogs.css"


const SingleDialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="dialog__list-item">
            <NavLink to={path} className="dialog__list-item_name" alt="">{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className="messages">
            <div className="messages__content">{props.message}</div>
        </div>
    )
}
let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Nikitos" },
    { id: 3, name: "Iluha" },
    { id: 4, name: "Atnoha" },
    { id: 5, name: "Kiruha" },
    { id: 6, name: "Egorishe" }
]
let messagesData = [
    { id: 1, message: "Ky" },
    { id: 2, message: "Che nado?" },
    { id: 3, message: "Ta niche" },
    { id: 4, message: "Pon😐" }
]

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialog__list">
                <SingleDialog name={dialogsData[0].name} id={dialogsData[0].id} />
                <SingleDialog name={dialogsData[1].name} id={dialogsData[1].id} />
                <SingleDialog name={dialogsData[2].name} id={dialogsData[2].id} />
                <SingleDialog name={dialogsData[3].name} id={dialogsData[3].id} />
                <SingleDialog name={dialogsData[4].name} id={dialogsData[4].id} />
                <SingleDialog name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className="messages__list">
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
            </div>
        </div>
    )


}

export default Dialogs;