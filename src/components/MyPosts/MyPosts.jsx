import React from "react";
import Post from "../MyPosts/Post/Post";
import "./MyPosts.css"

const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} />)
    return (
        <div className="posts">
            My Posts
            <textarea></textarea>
            <button className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts