
import React from "react";
import Post from "../MyPosts/Post/Post";
import "./MyPosts.css";
import { addPostActionCreator } from "../../redux/store";
import { updatePostTextActionCreator } from "../../redux/store";




const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} key={post.id} />)
    let newPost = React.createRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator());
        
    }
    let changePostText = () => {
        let text = newPost.current.value
        // props.updatePostText(text)
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
        
        // console.log(newPost.current.value)
    }

    return (
        <div className="posts">
            My Posts
            <textarea onChange={changePostText} ref={newPost} value={props.newPostText} placeholder="Сделайте новый пост!" />
            <button onClick={addPost} className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts