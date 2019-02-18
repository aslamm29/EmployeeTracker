import { ADD_EMPLOYEE } from '../actions'

export default function (state=[], action){
    switch(action.type){
        case ADD_EMPLOYEE:
        const newState = state.slice()
        newState.push(...action.payload)
        return newState
        default:
        return state
    }
}