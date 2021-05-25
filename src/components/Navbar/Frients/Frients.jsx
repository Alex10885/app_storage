import React from 'react';
import classes from "./../Navbar.module.css"
import FrientsItems from "./FrientsItems/FrientsItems";

const Frients = (props) => {




    let avatarItems = props.imgFrients
        .map(frItem=> <FrientsItems imgSource={frItem.imgSrc} name={frItem.frientName} id={frItem.id} />);

    return(
        <div className={classes.frients}>
            <h3 className={classes.title_frients}>Frients</h3>
            {avatarItems}

        </div>
    );
}

export default Frients;