import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, subscribe} from "./redux/state";
import {addMessage, addPost, updateNewPostText, updateNewMessageText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root')
    )
}
rerenderEntireTree()
subscribe(rerenderEntireTree)

