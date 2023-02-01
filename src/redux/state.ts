let rerenderEntireTree = () => {
    console.log('State changed')
}
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

export const state: RootStateType = {
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
}


export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likeCounts: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const addMessage = (messageText: string) => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: messageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree()
}

export const updateNewMessageText = (newText: string) => {

    state.dialogsPage.newMessageText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

