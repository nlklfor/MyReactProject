import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainet";



const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo name="Nikita" dob="30.05.2003" aducation="National Aviation University" website="https://allbyourselves.ru/" />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;

