const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let intialState = {
    message: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Yo!@!!"},
        {id: 3, message: "Hi friend)"}
    ],

    newMessageText: "",

    dialogs: [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Alex"},
        {id: 3, name: "Andrey"}
    ]
}

    const dialogsReducer = (state = intialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = "";
            state.message.push({id: 6, message: newMessage})
            return state;
        default:
            return state;

    }

    return state;
    }

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (bodyMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: bodyMessage
    }
}

export default dialogsReducer;