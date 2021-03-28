import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCount,
    setCountPages,
    setCurrentPage, setTotalUsersCount,
    setUsers, unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../../api/api";

class UsersContainer extends React.Component {

    handleSetCurrentPage = (event) => {
        const {innerHTML} = event.target;
        this.props.setCurrentPage(innerHTML);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(innerHTML, this.props.count).then(users => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(users.items);
        })
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.count);
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

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCountPages, setCurrentPage, setCount, setTotalUsersCount, getUsers,
})(UsersContainer);