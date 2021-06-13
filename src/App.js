import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Musuc/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar imgFrients={props.avatar}/>

                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs'
                           render={() =>
                               <DialogsContainer
                                   store={props.store}

                               />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               store = {props.store}/>}
                    />

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App;
