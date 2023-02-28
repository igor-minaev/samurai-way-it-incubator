import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {


        return (
            <StoreContext.Consumer>
                {
                    (store)=>{
                        const state = store.getState()

                        const addPost = (newPostText: string) => {
                            store.dispatch(addPostAC(newPostText))
                        }

                        const onPostChange = (newText: string) => {
                            store.dispatch(updateNewPostTextAC(newText))
                        }

                        return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                                        newPostText={state.profilePage.newPostText}/>
                    }
                }
            </StoreContext.Consumer>
        );
    }
;




