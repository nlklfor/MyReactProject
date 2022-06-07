import React from "react";
import "./Profile.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";


const Profile = () => {
    return (
        <div className="content">
            <ProfileInfo name="Nikita" dob="30.05.2003" aducation="National Aviation University" website="https://allbyourselves.ru/" />
            <MyPosts />
        </div>
    )
}

export default Profile;