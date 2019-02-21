import React from 'react';
import Table from './Table'
import { addEmployee } from './actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactTableForm from './ReactTableForm'

class App extends React.Component {

  componentDidMount(){
    console.log('componentDidMount')
    fetch('http://localhost:8080/api/employees')
  .then(response => response.json())
  .then(employees => this.props.addEmployee(employees))
}
   
  render(){
    return (
      <div className="App">
       <BrowserRouter>
        <div>
            <Switch>
                <Route path="/new" component={ReactTableForm}/>
                <Route path="/" component={Table} />
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addEmployee: addEmployee }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
