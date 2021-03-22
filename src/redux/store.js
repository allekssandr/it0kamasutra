import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageText: '',
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
    _callSubscriber() {
        console.log('state change');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;