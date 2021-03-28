const SET_USER_DATA = 'SET_USER_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return (
                {
                    ...state,
                    ...action.data,
                }
            );
        case SET_IS_AUTH:
            return (
                {
                    ...state,
                    isAuth: action.isAuth,
                }
            );
        default:
            return state;
    }
}

export const setUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth: isAuth});


export default authReducer;