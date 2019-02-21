export const ADD_EMPLOYEE = 'add_employee'
export const NEW_EMPLOYEE = 'new_employee'
export const DELETE_EMPLOYEE = 'delete_employee'

export function addEmployee(employees){
    return{
        type: ADD_EMPLOYEE,
        payload: employees
    }
}

export function newEmployee(values){
    return{
    type: NEW_EMPLOYEE,
    payload: values
    }
}

export function deleteEmployee(id){
    console.log(id)
    return{
        type: DELETE_EMPLOYEE,
        payload: id
    }
}