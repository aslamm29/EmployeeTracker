const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8080
const db = require('./node-api-postgres/queries')
//const employees = require('./data/employees.json');


var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
})

app.get('/api/employees', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/employees', db.getEmployees)
app.post('/employees', db.createEmployee)
app.put('/employees/:id', db.updateEmployee)
app.delete('/employees/:id', db.deleteEmployee)


app.listen(port, () => console.log('Job Dispatch API running on port 8080!'))