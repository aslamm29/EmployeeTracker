import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getEmployee } from './actions/index'
import axios from 'axios'


class Table extends Component{

    componentDidMount(){
        axios.get('http://localhost:8080/employees')
        .then(response => this.props.getEmployee(response.data))
    }

    renderDeleteButton(data) {
        return(
            <button onClick={() => {
                axios.delete(`http://localhost:8080/employees/${data.id}`)
                .then(() => { 
                    axios.get('http://localhost:8080/employees')
                    .then(response => this.props.getEmployee(response.data))
                })
            
            }}>Delete</button>
        )
    }

    renderEditButton(data) {
        const path = `/edit/${data.id}`
        return(
            <button><Link style={styles.link} to={path}>Edit</Link></button>
        )
    }

    render(){
        const MyLink = <Link style={styles.link} to="/new">Create new Entry</Link>
        const data = this.props.employees
          const columns = [{
            Header: 'ID',
            accessor: 'id'
            }, {
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
            }, {
                id: "1",
                Header: 'Delete',
                accessor: this.renderDeleteButton.bind(this)
            }, {
                id: "2",
                Header: 'Edit',
                accessor: this.renderEditButton.bind(this)
            }]
        
          return (
          <div>
            <h1>Plexxis Employees</h1>
            <div><Button variant="outlined">{MyLink}</Button></div>
            <ReactTable
            data={data}
            columns={columns}
          />
          </div>
          )
}
}

const styles = {
    link: {
        textDecoration: 'none',
        color: 'black'
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getEmployee: getEmployee }, dispatch)
}

function mapStateToProps(state){
    return({ 
        employees: state.employees
     })
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)