import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg" alt=""/>
            {props.message}
            <div>
              like: <span>{props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;