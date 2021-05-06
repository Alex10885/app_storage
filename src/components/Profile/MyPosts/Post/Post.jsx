import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg" alt=""/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;