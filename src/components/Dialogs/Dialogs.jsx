import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements  = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.message
        .map(m => <Message message={m.message}/>)

    let addNewMessage = state.newMessage

    let onSendMessageClick = () => {
        props.sendMessage();
        //props.store.dispatch(sendMessageCreator())
    }


    let onNewMessageChange = (e) => {
       let body = e.target.value;
       props.updateNewNessage(body);

    }


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

            <div>
                <textarea
                    ref={addNewMessage}
                    value={addNewMessage}
                    onChange={onNewMessageChange}
                    placeholder="Enter you message">
                </textarea>
                <button onClick={onSendMessageClick}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;

