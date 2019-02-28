import React from 'react';
import Table from './Table'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NewEmployeeForm from './NewEmployeeForm'
import EditForm from './EditForm'

class App extends React.Component {
   
  render(){
    return (
      <div className="App">
       <BrowserRouter>
        <div>
            <Switch>
                <Route path="/edit/:id" component={EditForm}/>
                <Route path="/new" component={NewEmployeeForm}/>
                <Route path="/" component={Table} />
            </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
