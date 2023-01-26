import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}




