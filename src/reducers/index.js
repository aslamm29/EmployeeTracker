import { combineReducers } from 'redux'
import EmployeeReducer from './reducer_employees'

const rootReducers = combineReducers({
employees: EmployeeReducer 
})

export default rootReducers