import React from "react";
import "./Dialogs.css"

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialog__list">
                <div className="dialog__list-item">
                    <a href="/dialogs" className="dialog__list-item_name" alt="">Dimych</a>
                </div>
                <div className="dialog__list-item">
                    <a href="/dialogs" className="dialog__list-item_name" alt="">Nikitos</a>
                </div>
                <div className="dialog__list-item">
                    <a href="/dialogs" className="dialog__list-item_name" alt="">Iluha</a>
                </div>
                <div className="dialog__list-item">
                    <a href="/dialogs" className="dialog__list-item_name" alt="">Atnoha</a>
                </div>
                <div className="dialog__list-item">
                    <a href="/dialogs" className="dialog__list-item_name" alt="">Kiruha</a>
                </div>
                <div className="dialog__list-item">
                    <a href="/dialogs" className="dialog__list-item_name" alt="">Egorishe</a>
                </div>
            </div>
            <div className="messages">
                <div className="messages__content">Hi</div>
                <div className="messages__content">Che nado?</div>
                <div className="messages__content">Ta niche</div>
                <div className="messages__content">Pon😐</div>
            </div>
        </div>
    )


}

export default Dialogs;