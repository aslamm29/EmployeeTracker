import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { newEmployee } from './actions/index'


class ReactTableForm extends Component{
    
    renderField(field){
        return(
            <div>
                <label>{field.label}</label><br />
                <input
                type="text" 
                style={field.meta.touched && field.meta.error ? styles.block : styles.defaultBlock}
                {...field.input}
                />
                <div style={styles.text}>
                    {field.meta.touched ? field.meta.error : ""}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.newEmployee(values)
        this.props.history.push('/')
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div>
                    <h1>Employee Details</h1>
                    <Field 
                    label="Id"
                    name="id"
                    component={this.renderField}
                    />
                    <Field 
                    label="Name"
                    name="name"
                    component={this.renderField}
                    />
                    <Field 
                    label="Code"
                    name="code"
                    component={this.renderField}
                    />
                    <Field 
                    label="Profession"
                    name="profession"
                    component={this.renderField}
                    />
                    <Field 
                    label="Color"
                    name="color"
                    component={this.renderField}
                    />
                    <Field
                    label="City"
                    name="city"
                    component={this.renderField}
                    />
                    <Field 
                    label="Branch"
                    name="branch"
                    component={this.renderField}
                    />
                    <Field 
                    label="Assigned"
                    name="assigned"
                    component={this.renderField}
                    />
                    <button type="Submit">Submit</button>
                    <Link to="/"><button style={styles.button}>Cancel</button></Link>
                </div>
            </form>
        )
    }
}

function validate(values){
    const errors={}

    if(!values.name){
        errors.name = "Enter a name"
    }
    if(!values.code){
        errors.code = "Enter a code"
    }
    if(!values.profession){
        errors.profession = "Enter a profession"
    }
    if(!values.color){
        errors.color = "Enter a color"
    }
    if(!values.city){
        errors.city = "Enter a city"
    }
    if(!values.branch){
        errors.branch = "Enter a branch"
    }
    return errors   
}

const styles = {
    button: {
        marginLeft: 10
    },
    text: {
        color: "red"
    },
    block: {
        border: "1px Solid Red"
    },
    defaultBlock: {
        border: "1px Solid Black"
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ newEmployee: newEmployee}, dispatch)
}

export default reduxForm({ validate, form: 'newEmployeeForm'})(connect(null, mapDispatchToProps)(ReactTableForm))