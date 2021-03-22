import React from "react";
import s from './Users.module.css';
import User from "./User/User";
import axios from "axios";

class Users extends React.Component {

    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(users => {
                this.props.setUsers(users.data.items);
            })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return (
            <div className={s.users}>
                <div className={s.usersList}>
                    {
                        this.props.users.map(user => {
                            return <User user={user} follow={this.props.follow} unfollow={this.props.unfollow} />
                        })
                    }
                </div>
                <div className={s.btnShow}>
                    <button>
                        SHOW MORE
                    </button>
                </div>
            </div>
        )
    }
}

export default Users;