import { GET_EMPLOYEE } from '../actions'

export default function (state=[], action){
    switch(action.type){
        case GET_EMPLOYEE:
        return action.payload
        default:
        return state
    }
}