import React, {FC} from 'react';

import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer: FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogsPage

    const addMessage = (newMessageText: string) => {
        props.store.dispatch(addMessageAC(newMessageText))
    }

    const onMessageChange = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
    );
};

