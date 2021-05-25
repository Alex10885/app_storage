import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Frients from "./Frients/Frients";

const Navbar = (props) => {



    return (

        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/dialogs">Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/settings">Settings</NavLink>
            </div>
            <Frients  imgFrients={ props.imgFrients} />
        </nav>


    );
}

export default Navbar;