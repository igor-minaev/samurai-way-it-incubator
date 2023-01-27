import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {


    const postsElement = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                    likeCounts={p.likeCounts}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value
        console.log(text)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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




