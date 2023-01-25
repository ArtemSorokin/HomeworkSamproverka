import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    debugger
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]

            console.log('Зашли в редьюсер UP')

            copyState.sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0

            })

            return action.payload === 'up' ? copyState : copyState.reverse()

        }
        case 'check': {

            return [...state].filter((el) => {
                if (action.payload < el.age) return el
                else return
            }) // need to fix
        }
        default:
            return state
    }
}
