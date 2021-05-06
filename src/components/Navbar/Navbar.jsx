import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a className= {classes.item_link_active} target="_blank" href="https://vk.com/id518172103">Profile</a>
            </div>
            <div className={classes.item}>
                <a className={classes.item_link} target="_blank" href="https://vk.com/id178167532">Message</a>
            </div>
            <div className={classes.item}>
                <a className={classes.item_link} target="_blank" href="#">News</a>
            </div>
            <div className={classes.item}>
                <a className={classes.item_link} target="_blank" href="#">Misuc</a>
            </div>
            <div className={classes.item}>
                <a className={classes.item_link} target="_blank" href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;