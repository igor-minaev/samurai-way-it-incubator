import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../redux/state";


export const DialogItem = (props: DialogItemType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}




