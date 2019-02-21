import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { deleteEmployee } from './actions/index'


class Table extends Component{

    renderButton(data) {
        console.log(this.props.deleteEmployee)
        return(
            <button onClick={() => this.props.deleteEmployee(data.id)}>Delete</button>
        )
    }

    render(){
        const MyLink = <Link style={styles.link} to="/new">Create new Entry</Link>
        const data = this.props.employees
        console.log(data)
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
                id: "23",
                Header: 'Delete',
                accessor: this.renderButton.bind(this)
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
    return bindActionCreators({ deleteEmployee: deleteEmployee }, dispatch)
}

function mapStateToProps(state){
    return({ 
        employees: state.employees
     })
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)