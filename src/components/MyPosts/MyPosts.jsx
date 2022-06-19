import React from "react";
import Post from "../MyPosts/Post/Post";
import "./MyPosts.css"

const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => <Post image={post.image} message={post.message} key={post.id} />)
    let newPost = React.createRef();
    let addPost = () => {
        // props.addPost();
        props.dispatch({type: "ADD-POST"});
        
    }
    let changePostText = () => {
        let text = newPost.current.value
        // props.updatePostText(text)
        props.dispatch({type: "UPDATE-POST-TEXT" , newText: text});
        
        // console.log(newPost.current.value)
    }

    return (
        <div className="posts">
            My Posts
            <textarea onChange={changePostText} ref={newPost} value={props.newPostText} />
            <button onClick={addPost} className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts