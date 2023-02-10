export type PostType = {
    id: number
    message: string
    likeCounts: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 15},
                {id: 2, message: "It's my first post", likeCounts: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostType = {
                    id: new Date().getTime(),
                    message: action.postText,
                    likeCounts: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break
            case 'ADD-MESSAGE':
                const newMessage: MessageType = {
                    id: new Date().getTime(),
                    message: action.messageText,
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber()
                break
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newText
                this._callSubscriber()
                break
            default:
                throw new Error("I don't understand this action type")

        }

    }
}

export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', postText: newPostText} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
export const addMessageAC = (newMessageText: string) => ({type: 'ADD-MESSAGE', messageText: newMessageText} as const)
export const updateNewMessageTextAC = (newText: string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newText} as const)







