import React from "react";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";

const Content = (props) => {
    return (
        <div className={s.content}>
            <Route path={'/profile'} render={() =>
                <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}
                />}
            />
            <Route path={'/message'} render={() =>
                <Dialogs
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch}
                />}
            />
        </div>
    )
}
export default Content;