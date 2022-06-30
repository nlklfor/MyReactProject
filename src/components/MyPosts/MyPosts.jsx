
import React from "react";
import Post from "../MyPosts/Post/Post";
import "./MyPosts.css";





const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} key={post.id} />)
    let newPost = React.createRef();
    let onAddPost = () => {
        props.addPost();
        
    }
    let OnChangePostText = () => {
        let text = newPost.current.value
        props.updatePostText(text)
    }

    return (
        <div className="posts">
            My Posts
            <textarea onChange={OnChangePostText} ref={newPost} value={props.newPostText} placeholder="Make a new post!" />
            <button onClick={onAddPost} className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts