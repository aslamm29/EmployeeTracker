import _ from "lodash"
import { ADD_EMPLOYEE, NEW_EMPLOYEE, DELETE_EMPLOYEE } from '../actions'

export default function (state=[], action){
    switch(action.type){
        case ADD_EMPLOYEE:
        const addState = state.slice()
        addState.push(...action.payload)
        return addState
        case NEW_EMPLOYEE:
        const newState = state
        newState.push(action.payload)
        return newState
        case DELETE_EMPLOYEE:
        let deleteState = state
        const finalState = _.remove(deleteState, (currentElement) => {
            return currentElement.id !== action.payload
        })
        return finalState
        default:
        return state
    }
}
