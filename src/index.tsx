import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppStateType, store} from "./redux/redux-store";

import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    )
}
rerenderEntireTree(store.getState())
store.subscribe(()=>rerenderEntireTree(store.getState()))

