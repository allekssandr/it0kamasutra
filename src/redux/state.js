let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Привет 1',
                    likesCount: 0,
                },
                {
                    id: 2,
                    message: 'Привет 2',
                    likesCount: 0,
                },
                {
                    id: 3,
                    message: 'Привет 3',
                    likesCount: 0,
                },
                {
                    id: 4,
                    message: 'Привет 4',
                    likesCount: 0,
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Masha'},
                {id: 4, name: 'Alena'},
                {id: 5, name: 'Ivan'},
            ],
            messages: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How it you work&'},
                {id: 3, message: 'Yo!'},
            ],
        },
        sidebar: {
            friendsBar: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Sasha'},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state change');
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
}

export default store;