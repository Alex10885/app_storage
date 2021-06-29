import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";



let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                     avatar={store.getState().navbarFrame.imgFrients}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )

};


 rerenderEntireTree(store.getState());


reportWebVitals();

