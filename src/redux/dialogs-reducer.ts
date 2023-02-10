import {ActionsTypes, DialogsPageType, MessageType} from "./state";

export type AddMessageActionType = ReturnType<typeof addMessageAC>
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageAC = (newMessageText: string) => ({type: 'ADD-MESSAGE', messageText: newMessageText} as const)
export const updateNewMessageTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
} as const)

export default dialogsReducer;