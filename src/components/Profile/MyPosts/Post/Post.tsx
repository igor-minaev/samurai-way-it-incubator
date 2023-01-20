import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likeCounts: number
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApbxj4499GJJWMYvKUVnzMUBJBt1b_Aob0A&usqp=CAU"
                alt="avatar"/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>

    );
};




