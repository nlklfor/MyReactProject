import React from "react";
import Post from "./Post";
import "./MyPosts.css"

let postsData = [
    { id: 1, message: "This team will never trade ⬇", image: 'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png' },
    { id: 2, message: "Joel chmo", image: 'https://www.kindpng.com/picc/m/104-1042894_transparent-lebron-james-face-png-stephen-curry-face.png' },
    { id: 3, message: "NePon😐", image: 'https://www.si.com/.image/t_share/MTY4NDk3MTA3MjYyNzc3MTEw/joel-embiid.png' }
]
let postsElements = postsData.map((post) => <Post image={post.image} message={post.message} />)


const MyPosts = () => {

    return (
        <div className="posts">
            My Posts
            <textarea></textarea>
            <button className="posts__btn-add">Add post</button>
            <div className="posts_added">
                {postsElements}
                {/* <Post image={postsData[0].image} message={postsData[0].message} />
                <Post image={postsData[1].image} message={postsData[1].message} />
                <Post image={postsData[2].image} message={postsData[2].message} /> */}
            </div>
        </div>
    )
}
export default MyPosts