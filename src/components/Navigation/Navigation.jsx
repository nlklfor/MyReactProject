import React from "react";
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="nav">
            <ul className="nav__link">
                <li className="nav__link-profile">
                    <a href="/" className="nav__item item">Profile</a>
                </li>
                <li className="nav__link-messages item">
                    <a href="/" className="nav__item">Messages</a>
                </li>
                <li className="nav__link-news item">
                    <a href="/" className="nav__item">News</a>
                </li>
                <li className="nav__link-music item">
                    <a href="/" className="nav__item">Music</a>
                </li>
                <li className="nav__link-settings item">
                    <a href="/" className="nav__item">Settings</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;