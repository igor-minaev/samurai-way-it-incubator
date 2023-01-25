import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const postsData = [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: "It's my first post", likeCounts: 20},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[0].likeCounts}/>
            </div>
        </div>
    );
};




