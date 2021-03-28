import React from "react";
import s from './Content.module.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Content = (props) => {
    return (
        <div className={s.content}>
            {/*<Route path={'/profile/:id'} render={() => <ProfileContainer />} />*/}
            <Route path={'/profile/:id?'} component={ProfileContainer} />
            <Route path={'/message'} render={() => <DialogsContainer />} />
            <Route path={'/users/'} render={() => <UsersContainer />} />
        </div>
    )
}
export default Content;