import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profile-reducer";
import {getProfile} from "../../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        if (!this.props.match.params.id) {
            getProfile(2)
                .then(response => {this.props.setUserProfile(response)})
        } else {
            getProfile(this.props.match.params.id)
                .then(response => {this.props.setUserProfile(response)})
        }
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myId: state.auth.id,
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

