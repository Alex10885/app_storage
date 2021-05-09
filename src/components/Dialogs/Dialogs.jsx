import React from 'react';
import classes from './Dialogs.module.css';
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

const Message = (props) => {

    let message = props.message;

    return (
        <div>
            <div className={classes.message}> {message}</div>
        </div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name:"Dmitry"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Andrey"}
    ]

    let message = [
        {id: 1, message:"Hi"},
        {id: 2, message: "Yo!@!!"},
        {id: 3, message: "Hi friend)"}
    ]

    let dialogsElements  = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = message
        .map(m => <Message message={m.message}/>)

    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;

