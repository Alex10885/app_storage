import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
        <div className={classes.content}>
            <img
                src="https://www.dayton.com/resizer/xVj42nf8cFaw2uJHAvRJiGMfwEs=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/coxohio/NAJA2BSLBIA3NUJAI65RQAUK24.jpg"
                alt="img"/>

            <div>
                ava + description
            </div>
            <MyPosts />
        </div>

    );
}

export default Profile;