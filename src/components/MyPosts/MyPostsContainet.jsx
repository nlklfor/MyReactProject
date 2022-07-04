
import React from "react";
import "./MyPosts.css";
import { addPostActionCreator, updatePostTextActionCreator } from "../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../API/StoreContext";





const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    // let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} key={post.id} />)
                    // let newPost = React.createRef();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());

                    }
                    let changePostText = (text) => {
                        let action = updatePostTextActionCreator(text);
                        store.dispatch(action);
                        // console.log(newPost.current.value)
                    }
                    return (
                        <MyPosts updatePostText={changePostText} addPost={addPost} postsData={state.profileState.postsData} newPostText={state.profileState.newPostText} />
                    )
                }
            }

        </StoreContext.Consumer>
    )
}
export default MyPostsContainer