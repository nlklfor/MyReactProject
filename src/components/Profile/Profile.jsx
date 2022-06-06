import React from "react";
import "./Profile.css";
import MyPosts from "../MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className="content">
            <div className="content__background">
                <img src="https://i.ytimg.com/vi/LF0HZVTfBXQ/maxresdefault.jpg" className="profile__background" alt=""></img>
            </div>
            <div className="content__profile">
                <div className="profile__pic">
                    <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" alt="" className="prof__pic"></img>
                </div>
                <div className="profile__desc">
                    <ul className="profile__info">
                        <li className="profile__info-name">
                            Nikita
                        </li>
                        <li className="profile__info-dob">
                            Date of birth : 30may 2003
                        </li>
                        <li className="profile__info-education">
                            Education: National Avaition University
                        </li>
                        <li className="profile__info-website">
                            Website: https://allbyourselves.ru/
                        </li>
                    </ul>
                </div>
            </div>
            <div className="profile__posts">
                <MyPosts />
            </div>
        </div>
    )
}

export default Profile;