
import React from "react";
import Post from "../MyPosts/Post/Post";
import "./MyPosts.css";
import { addPostActionCreator, updatePostTextActionCreator } from "../../redux/profileReducer";





const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} key={post.id} />)
    let newPost = React.createRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
        
    }
    let changePostText = () => {
        let text = newPost.current.value
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
        
        // props.updatePostText(text)
        // console.log(newPost.current.value)
    }

    return (
        <div className="posts">
            My Posts
            <textarea onChange={changePostText} ref={newPost} value={props.newPostText} placeholder="Make a new post!" />
            <button onClick={addPost} className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts