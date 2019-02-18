export const ADD_EMPLOYEE = 'add_employee'

export function addEmployee(employees){
    return{
        type: ADD_EMPLOYEE,
        payload: employees
    }
}