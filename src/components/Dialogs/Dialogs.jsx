import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let dialogsElements  = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.message
        .map(m => <Message message={m.message}/>)

    let addNewMessage = React.createRef();

    let sendMessage = () => {
        let newMessage = addNewMessage.current.value;
        alert(newMessage);
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
                <textarea ref={addNewMessage} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;

