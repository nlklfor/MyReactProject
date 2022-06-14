import React from "react";
import "./Profile.css";
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (
        <div className="content">
            <ProfileInfo name="Nikita" dob="30.05.2003" aducation="National Aviation University" website="https://allbyourselves.ru/" />
            <MyPosts postsData={props.profileState.postsData} newPostText={props.profileState.newPostText} addPost={props.addPost} updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;

