import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likeCount: 60},
                {id: 2, message: "Yo!@!!", likeCount: 12}
            ],
            newPostText: 'Гы - гы!!!'

        },
        dialogsPage: {
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
            ],

        },
        navbarFrame: {
            imgFrients: [
                {id: 1, imgSrc: "https://i.ytimg.com/vi/B3BM3WnzFkg/hqdefault.jpg", frientName: "Zulu"},
                {id: 2, imgSrc: "https://i.ytimg.com/vi/jAUs7QlMZjo/hqdefault.jpg", frientName: "Beta"},
                {
                    id: 3,
                    imgSrc: "https://i.pinimg.com/564x/0b/82/e4/0b82e44c6a294f1b1200e44ea15fdf60.jpg",
                    frientName: "Omega"
                }
            ]
        }
    },
    _callSubscruber() {
        console.log("Стейт изменен");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscruber = observer; // наблюдатель
    },



    dispatch(action) {

       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
       this._state.navbarFrame = navbarReducer(this._state.navbarFrame, action);

        this._callSubscruber(this._state);

    }
}



export default store;
window.store = store;