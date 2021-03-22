import React from "react";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path={'/profile'} render={() => <Profile />} />
            <Route path={'/message'} render={() => <DialogsContainer />} />
            <Route path={'/users'} render={() => <UsersContainer />} />
        </div>
    )
}
export default Content;