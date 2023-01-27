import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {


    const postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                    likeCounts={p.likeCounts}/>)

    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
            postMessageRef.current.value = ''
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}></textarea>
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
};




