import {Simulate} from "react-dom/test-utils";
import copy = Simulate.copy;

const initState = {
    themeId: 1,
}

type actionType = {
    type: string,
    id:number
}

type initStateType = {
    themeId:number
}

export const themeReducer = (state = initState, action: actionType): initStateType => { // fix any
    switch (action.type) {
        case  'SET_THEME_ID':

            return {...state, themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
