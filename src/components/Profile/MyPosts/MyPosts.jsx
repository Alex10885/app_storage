import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message:"Hi", likeCount:60},
        {id: 2, message: "Yo!@!!", likeCount:12}
    ]

    let postsElements= posts.map( p => <Post message={p.message}  likeCount= {p.likeCount}/>);



    return (
        <div className="items">
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;