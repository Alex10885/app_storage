import React from 'react';
import classes from './../Dialogs.module.css';




const Message = (props) => {

    let message = props.message;

    return (
        <div>
            <div className={classes.message}> {message}</div>
        </div>
    );
}



export default Message;

