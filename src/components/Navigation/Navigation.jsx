import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="nav">
            <ul className="nav__link">
                <li className="nav__link-profile">
                    <NavLink to="/profile" className="nav__item item">Profile</NavLink>
                </li>
                <li className="nav__link-messages item">
                    <NavLink to="/dialogs" className="nav__item">Messages</NavLink>
                </li>
                <li className="nav__link-news item">
                    <NavLink to="/news" className="nav__item">News</NavLink>
                </li>
                <li className="nav__link-music item">
                    <NavLink to="/music" className="nav__item">Music</NavLink>
                </li>
                <li className="nav__link-settings item">
                    <NavLink to="/settings" className="nav__item">Settings</NavLink>
                </li>
                <li className="nav__link-friends item">
                    <NavLink to="/" className="nav__item">Friends</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;