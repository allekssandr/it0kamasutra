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
                    // ...state.users,
                    countPages: action.countPages
                }
            );
        case SET_CURRENT_PAGE:
            return (
                {
                    ...state,
                    // ...state.users,
                    currentPage: action.currentPage
                }
            );
        case SET_COUNT:
            return (
                {
                    ...state,
                    // ...state.users,
                    count: action.count
                }
            );
        case SET_TOTAL_USERS_COUNT:
            return (
                {
                    ...state,
                    // ...state.users,
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

export const follow = (idUser) => ({type: FOLLOW, id: idUser});
export const unfollow = (idUser) => ({type: UNFOLLOW, id: idUser});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCountPages = (countPages) => ({type: SET_COUNT_PAGES, countPages: countPages});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setCount = (count) => ({type: SET_COUNT, count: count});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowInProgress = (idUser, isFetching) => ({type: TOGGLE_FOLLOW_IN_PROGRESS, idUser: idUser, isFetching: isFetching});

export default usersReducer;