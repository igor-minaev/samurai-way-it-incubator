import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export const Dialogs: FC<DialogsPropsType> = (props) => {


    const dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)


    const messagesElements = props.messages.map(m => <Message id={m.id} key={m.id}
                                                              message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

