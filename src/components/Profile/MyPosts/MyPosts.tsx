import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {


        const postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                        likeCounts={p.likeCounts}/>)


        const addPost = () => {
            props.addPost(props.newPostText)
        }
        const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
        }


        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea value={props.newPostText} onChange={onPostChange}/>
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




