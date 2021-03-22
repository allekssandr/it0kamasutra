import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/users-reducer";

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        follow: (idUser) => {
            dispatch(followAC(idUser));
        },
        unfollow: (idUser) => {
            dispatch(unfollowAC(idUser));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
)


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;