
export type initStateType = {
    isLoading: boolean
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

 const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType):initStateType  => { // fix any
    debugger
    switch (action.type) {
        case  'CHANGE_LOADING': return {...state, isLoading:action.isLoading}

        // пишет студент  // need to fix

        default:

            // alert('Mimo ti zahyachil')
            return state
    }
}



export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
