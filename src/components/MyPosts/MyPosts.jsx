import React from "react";
import Post from "../MyPosts/Post/Post";
import "./MyPosts.css"

const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} />)
    let newPost = React.createRef();
    let addPost = () => {
        // let postContent = newPost.current.value
        props.addPost(newPost.current.value);
    }
    return (
        <div className="posts">
            My Posts
            <textarea ref={newPost}></textarea>
            <button onClick={addPost} className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts