import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}



export const MyPosts: FC<MyPostsPropsType> = (props) => {


        const postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                        likeCounts={p.likeCounts}/>)


        const addPost = () => {
            props.dispatch(addPostAC(props.newPostText))
        }
        const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateNewPostTextAC(e.currentTarget.value))
        }


        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' value={props.newPostText} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post
                        </button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        );
    }
;




