let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message:"Hi", likeCount:60},
                {id: 2, message: "Yo!@!!", likeCount:12}
            ],
            newPostText: 'Гы - гы!!!'

        },
        dialogsPage:{
            message: [
                {id: 1, message:"Hi"},
                {id: 2, message: "Yo!@!!"},
                {id: 3, message: "Hi friend)"}
            ],
            newMessageText: "First Message",
            dialogs: [
                {id: 1, name:"Dmitry"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Andrey"}
            ]
        },
        navbarFrame:{
            imgFrients: [
                {id:1, imgSrc: "https://i.ytimg.com/vi/B3BM3WnzFkg/hqdefault.jpg", frientName:"Zulu"},
                {id:2, imgSrc: "https://i.ytimg.com/vi/jAUs7QlMZjo/hqdefault.jpg", frientName: "Beta"},
                {id: 3, imgSrc: "https://i.pinimg.com/564x/0b/82/e4/0b82e44c6a294f1b1200e44ea15fdf60.jpg", frientName: "Omega"}
            ] }
    },
    _callSubscruber() {
        console.log("Стейт изменен");
    },
    getState(){
        return this._state;
    },
    addPost(){

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscruber(store._state);
    },
    updatePostText(newText){

        this._state.profilePage.newPostText = newText;
        this._callSubscruber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.message
        };
        this._state.dialogsPage.newMessageText.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscruber(this._state);
    },
    subscribe(observer) {
        this._callSubscruber = observer; // наблюдатель
    }
}


export default store;
window.store = store;