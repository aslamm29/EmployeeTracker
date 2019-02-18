import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addEmployee } from './actions'

class Table extends Component{
  
    componentWillMount(){
        fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(employees => this.props.addEmployee(employees))
    }
    
    render(){
        const data = this.props.employees
        
          const columns = [{
                  Header: 'Name',
                  accessor: 'name'
              }, {
                Header: 'Code',
                accessor: 'code'
            }, {
                Header: 'Profession',
                accessor: 'profession'
            }, {
                Header: 'Color',
                accessor: 'color'
            }, {
                Header: 'City',
                accessor: 'city'
            }, {
                Header: 'Branch',
                accessor: 'branch'
            }]
        
          return (
          <div>
            <h1>Plexxis Employees</h1>
            <ReactTable
            data={data}
            columns={columns}
          />
          </div>
          )
}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ addEmployee: addEmployee }, dispatch)
}

function mapStateToProps(state){
    return({ 
        employees: state.employees
     })
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)