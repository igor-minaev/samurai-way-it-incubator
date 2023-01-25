import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={'Sveta'} id={3}/>
                <DialogItem name={'Sasha'} id={4}/>
                <DialogItem name={'Viktor'} id={5}/>
                <DialogItem name={'Valera'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

