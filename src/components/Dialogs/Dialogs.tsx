import React, {ChangeEvent, FC} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: FC<DialogsPropsType> = (props) => {


    const dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)


    const messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} key={m.id}
                                                                          message={m.message}/>)


    const addMessage = () => {
        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea placeholder='Enter your message' value={props.dialogsPage.newMessageText}
                              onChange={onMessageChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

