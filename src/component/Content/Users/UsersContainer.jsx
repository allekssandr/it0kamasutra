import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCount,
    setCountPages,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowInProgress, toggleIsFetching, toggleIsProgress,
    unfollow
} from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {followUser, getUsers, unfollowUser} from "../../../api/api";

class UsersContainer extends React.Component {
    setFollowUser = (userId) => {
        this.props.toggleFollowInProgress(userId, true);
        followUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    this.props.follow(userId);
                    this.props.toggleFollowInProgress(userId, false);
                }
            })
    }

    setUnfollowUser = (userId) => {
        this.props.toggleFollowInProgress(userId, true);
        unfollowUser(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    this.props.unfollow(userId);
                    this.props.toggleFollowInProgress(userId, false);
                }
            })
    }

    handleSetCurrentPage = (event) => {
        const {innerHTML} = event.target;
        this.props.setCurrentPage(innerHTML);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${innerHTML}&count=${this.props.count}`)
            .then(users => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(users.data.items);
            })
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.count).then(users => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(users.items);
            this.props.setTotalUsersCount(users.totalCount);
        });
    }

    createPagination = () => {
        let pages = [];
        let page;
        for (let i = 1; i <= this.props.countPages; i++) {
            if (i === Number(this.props.currentPage)) {
                page = <button onClick={this.handleSetCurrentPage}><b>{i}</b></button>
            } else {
                page = <button onClick={this.handleSetCurrentPage}>{i}</button>
            }
            pages = [...pages, page];
        }
        return pages;
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    count={this.props.count}
                    setCountPages={this.props.setCountPages}
                    createPagination={this.createPagination}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setFollowUser={this.setFollowUser}
                    setUnfollowUser={this.setUnfollowUser}
                    followInProgress={this.props.followInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users,
        countPages: state.usersPage.countPages,
        currentPage: state.usersPage.currentPage,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    }
);

/*const mapDispatchToProps = (dispatch) => (
    {
        follow: (idUser) => {
            dispatch(followAC(idUser));
        },
        unfollow: (idUser) => {
            dispatch(unfollowAC(idUser));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCountPages: (countPages) => {
            dispatch(setCountPagesAC(countPages));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setCount: (count) => {
            dispatch(setCountAC(count));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
)*/

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCountPages, setCurrentPage, setCount, setTotalUsersCount, toggleIsFetching, toggleFollowInProgress
})(UsersContainer);