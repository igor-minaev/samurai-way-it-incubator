import React, {FC} from 'react';

import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}


export const MyPostsContainer: FC<MyPostsPropsType> = (props) => {
        const state = props.store.getState()


        const addPost = (newPostText: string) => {
            props.store.dispatch(addPostAC(newPostText))
        }
        const onPostChange = (newText: string) => {
            props.store.dispatch(updateNewPostTextAC(newText))
        }


        return (
            <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>
        );
    }
;




