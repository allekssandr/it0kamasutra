import React from "react";
import FriendsBar from "./FriendsBar";
import {connect} from "react-redux";

let mapStateToProps = (state) => (
    {
        friends: state.sidebar.friendsBar,
    }
)

// let mapDispatchToProps = (dispatch) => ({});

const FriendsBarContainer = connect(mapStateToProps)(FriendsBar)

export default FriendsBarContainer;

