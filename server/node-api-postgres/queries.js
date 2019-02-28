const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432
})

const getEmployees = (request, response) => {
    pool.query('SELECT * FROM employees ORDER BY id ASC', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createEmployee = (request, response) => {
    const { name, code, profession, color, city, branch, assigned } = request.body

    pool.query('INSERT INTO employees (name, code, profession, color, city, branch, assigned) VALUES($1, $2, $3, $4, $5, $6, $7)', [name, code, profession, color, city, branch, assigned], (error, results) => {
        if(error){
            throw error
        }
        response.status(201).send(`Employee added with ID: ${results.insertId}`)
    })
}

const updateEmployee = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, code, profession, color, city, branch, assigned } = request.body
  
    pool.query(
      'UPDATE employees SET name = $1, code = $2, profession = $3, color = $4, city = $5, branch = $6, assigned = $7 WHERE id = $8',
      [name, code, profession, color, city, branch, assigned, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

const deleteEmployee = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM employees WHERE id=$1', [id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).send(`Employee deleted with ID: ${id}`)
    })
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
