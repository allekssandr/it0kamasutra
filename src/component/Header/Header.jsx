import React from "react";
import s from './Header.module.css';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div>Header</div>
            <div className={s.userLogin}>{props.isAuth ? props.login : 'Login'}</div>
        </div>
    )
}

export default Header;