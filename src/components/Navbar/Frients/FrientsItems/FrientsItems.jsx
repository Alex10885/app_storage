import React from 'react';
import classes from "./../../Navbar.module.css";

const FrientsItems = (props) => {



    return (
        <div className={classes.frients_items}>
            <a href="#">
                <img className={classes.frients_img} src={props.imgSource}/>
            </a>
            <div className={classes.frients_name}>{props.name}</div>
        </div>
    );

}
export default FrientsItems;