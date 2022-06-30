
import React from "react";
import "./MyPosts.css";
import { addPostActionCreator, updatePostTextActionCreator } from "../../redux/profileReducer";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {
    
    let state = props.store.getState();
    // let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} key={post.id} />)
    // let newPost = React.createRef();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        
    }
    let changePostText = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
        // console.log(newPost.current.value)
    }

    return (
        <MyPosts updatePostText={changePostText} addPost={addPost} postsData={state.profileState.postsData} newPostText={state.profileState.newPostText} />
    )
}
export default MyPostsContainer