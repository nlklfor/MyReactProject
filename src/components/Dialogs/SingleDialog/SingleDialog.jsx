import React from "react";
import { NavLink } from "react-router-dom";
import "./../Dialogs.css"

const SingleDialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="dialog__list-item">
            <img className="dialog__list-item_avatar" src={props.image} alt=""></img>
            <NavLink to={path} className="dialog__list-item_name" alt="">{props.name}</NavLink>
        </div>
    )
}


export default SingleDialog;