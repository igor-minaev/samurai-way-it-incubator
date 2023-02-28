import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: (newPostText: string) => void
}


export const MyPosts: FC<MyPostsPropsType> = (props) => {


        const postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                        likeCounts={p.likeCounts}/>)


        const onAddPost = () => {
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
                        <textarea placeholder='Enter your message' value={props.newPostText} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post
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




