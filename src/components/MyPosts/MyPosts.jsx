import React from "react";
import Post from "./Post";
import "./MyPosts.css"

const MyPosts = () => {
    return (
        <div className="posts">
            My Posts
            <textarea></textarea>
            <button className="posts__btn-add">Add post</button>
            <div className="posts_added">
                <Post image={'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png'} message="This team will never trade ⬇" />
                <Post image={'https://www.kindpng.com/picc/m/104-1042894_transparent-lebron-james-face-png-stephen-curry-face.png'} message="Joel chmo" />
                <Post image={'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png'} message="Nepon?!" />
            </div>
        </div>
    )
}
export default MyPosts