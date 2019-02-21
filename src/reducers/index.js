import { combineReducers } from 'redux'
import EmployeeReducer from './reducer_employees'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
employees: EmployeeReducer,
form: formReducer 
})

export default rootReducers