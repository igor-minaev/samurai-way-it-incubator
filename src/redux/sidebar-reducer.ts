import {ActionsTypes} from "./redux-store";


export type SidebarType = {}
const initialState: SidebarType = {}


const sidebarReducer = (state = initialState, action: ActionsTypes): SidebarType => {
    return state;
}

export default sidebarReducer;