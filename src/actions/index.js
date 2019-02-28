export const GET_EMPLOYEE = 'get_employee'

export function getEmployee(employees){
    return{
        type: GET_EMPLOYEE,
        payload: employees
    }
}
