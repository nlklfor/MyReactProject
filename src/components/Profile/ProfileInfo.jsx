import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = (props) => {
    return (
        <div className="content__profile">
            <div className="content__background">
                <img src="https://i.ytimg.com/vi/LF0HZVTfBXQ/maxresdefault.jpg" className="profile__background" alt=""></img>
            </div>
            <div className="profile__desc">
                <div className="profile__pic">
                    <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" alt="" className="prof__pic"></img>
                </div>
                <ul className="profile__info">
                    <li className="profile__info-name">
                        {props.name}
                    </li>
                    <li className="profile__info-dob">
                        Date of birth : {props.dob}
                    </li>
                    <li className="profile__info-education">
                        Education: {props.aducation}
                    </li>
                    <li className="profile__info-website">
                        Website: {props.website}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;