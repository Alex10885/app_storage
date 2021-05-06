import React from 'react';

const Profile = () =>{
    return(
        <div className='content'>
            <img
                src="https://www.dayton.com/resizer/xVj42nf8cFaw2uJHAvRJiGMfwEs=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/coxohio/NAJA2BSLBIA3NUJAI65RQAUK24.jpg"
                alt="img"/>

            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    <div>
                        New posts
                    </div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;