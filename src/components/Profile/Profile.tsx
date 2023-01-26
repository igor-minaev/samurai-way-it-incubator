import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: "It's my first post", likeCounts: 20},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};




