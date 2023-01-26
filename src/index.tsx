import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";

const posts: Array<PostType> = [
    {id: 1, message: 'Hi, how are you?', likeCounts: 15},
    {id: 2, message: "It's my first post", likeCounts: 20},
]

const dialogs: Array<DialogItemType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

const messages: Array<MessageType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'}
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
    document.getElementById('root')
);