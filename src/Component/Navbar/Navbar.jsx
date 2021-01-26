import React from "react";
import s from './Navbar.module.css';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <Link to={'/profile'}>Profile</Link>
            </div>
            <div className={s.item}>
                <Link to={'/message'}>Message</Link>
            </div>
            <div className={s.item}>
                <Link to={'/'}>News</Link>
            </div>
            <div className={s.item}>
                <Link to={'/'}>Music</Link>
            </div>
            <div className={s.item}>
                <Link to={'/'}>Settings</Link>
            </div>
        </div>
    )
}

export default Navbar;