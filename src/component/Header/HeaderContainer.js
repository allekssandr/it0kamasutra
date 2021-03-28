import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setIsAuth, setUserData} from "../../redux/auth-reducer";
import {authMe} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authMe()
            .then(response => {
                if (response.resultCode === 0){
                    let userData = response.data;
                    this.props.setUserData(userData.id, userData.login, userData.email);
                    this.props.setIsAuth(true);
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {setUserData, setIsAuth})(HeaderContainer);