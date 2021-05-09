import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <img
                src="https://www.dayton.com/resizer/xVj42nf8cFaw2uJHAvRJiGMfwEs=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/coxohio/NAJA2BSLBIA3NUJAI65RQAUK24.jpg"
                alt="img"/>
            <div className={classes.descriptionBlock}>
                ava + info
            </div>
        </div>

    );
}

export default ProfileInfo;