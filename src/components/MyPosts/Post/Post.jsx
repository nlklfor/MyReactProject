import React from "react";
import "./Post.css"

const Post = (props) => {
    return (
        <div className="post__wrapper">
            <div className="post__img">
                <img src={props.image} alt=""></img>
            </div>
            <div className="post__desc">
                {props.message}
            </div>
        </div>
    )
}

export default Post;