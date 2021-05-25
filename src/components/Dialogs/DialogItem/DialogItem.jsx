import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {

    let name = props.name;
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <div className={classes.dialog + ' ' + classes.active}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    );
}


export default DialogItem;

