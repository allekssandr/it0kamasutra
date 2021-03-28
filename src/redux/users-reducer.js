import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_COUNT_PAGES = 'SET_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT = 'SET_COUNT';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'TOGGLE_FOLLOW_IN_PROGRESS';


let initialState = {
    users: [],
    countPages: 0,
    currentPage: 1,
    count: 10,
    totalUsersCount: 0,
    isFetching: false,
    followInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.id) {
                            user.followed = true;
                        }
                        return user;
                    })
                }
            );
        case UNFOLLOW:
            return (
                {
                    ...state,
                    users: state.users.map(user => {
                        if (user.id === action.id) {
                            user.followed = false;
                        }
                        return user;
                    })
                }
            );
        case SET_USERS:
            return (
                {
                    ...state,
                    users: [...action.users]
                }
            );
        case SET_COUNT_PAGES:
            return (
                {
                    ...state,
                    countPages: action.countPages
                }
            );
        case SET_CURRENT_PAGE:
            return (
                {
                    ...state,
                    currentPage: action.currentPage
                }
            );
        case SET_COUNT:
            return (
                {
                    ...state,
                    count: action.count
                }
            );
        case SET_TOTAL_USERS_COUNT:
            return (
                {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                }
            );
        case TOGGLE_IS_FETCHING:
            return (
                {
                    ...state,
                    isFetching: action.isFetching,
                }
            );
            case TOGGLE_FOLLOW_IN_PROGRESS:
            return (
                {
                    ...state,
                    followInProgress: action.isFetching
                        ? [...state.followInProgress, action.idUser]
                        : state.followInProgress.filter(el => el !== action.idUser)
                }
            );
        default:
            return state;
    }
}

export const followSuccess = (idUser) => ({type: FOLLOW, id: idUser});
export const unfollowSuccess = (idUser) => ({type: UNFOLLOW, id: idUser});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCountPages = (countPages) => ({type: SET_COUNT_PAGES, countPages: countPages});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setCount = (count) => ({type: SET_COUNT, count: count});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowInProgress = (idUser, isFetching) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, idUser: idUser, isFetching: isFetching});

export const getUsers =  (currentPage, count) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, count).then(users => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(users.items));
            dispatch(setTotalUsersCount(users.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(userId, true));
        usersAPI.followUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId));
                    dispatch(toggleFollowInProgress(userId, false));
                }
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress(userId, true));
        usersAPI.unfollowUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                    dispatch(toggleFollowInProgress(userId, false));
                }
            })
    }
}

export default usersReducer;