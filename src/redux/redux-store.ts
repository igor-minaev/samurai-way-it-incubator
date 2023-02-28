import {combineReducers, createStore} from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";
import dialogsReducer, {AddMessageActionType, UpdateNewMessageTextActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const RootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export const store = createStore(RootReducer)

type RootReducerType = typeof RootReducer
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType