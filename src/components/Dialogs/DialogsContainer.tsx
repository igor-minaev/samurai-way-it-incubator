import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage

                    const addMessage = (newMessageText: string) => {
                        store.dispatch(addMessageAC(newMessageText))
                    }

                    const onMessageChange = (newText: string) => {
                        store.dispatch(updateNewMessageTextAC(newText))
                    }
                    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>

    );
};

