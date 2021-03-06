import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postsElements=
        props.posts.map( p => <Post message={p.message}  likeCount= {p.likeCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);


    }

    return (
        <div className="items">
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10" value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
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