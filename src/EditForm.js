import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'


class EditForm extends Component{
 
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
    const id = this.props.match.params.id

    axios.put(`http://localhost:8080/employees/${id}`, values)
    .then(() => {
    this.props.history.push('/');
    });
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div>
                    <h1>Employee Details</h1>
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
                    <button type="Submit">Update</button>
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
    if(!values.assigned){
        errors.assigned = "Assign True or False"
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

function mapStateToProps(state){
    return{
        employees: state.employees,
    }
}


export default 
reduxForm(
        { 
            validate, 
            form: 'editEmployeeForm'
        }
    )(connect(mapStateToProps, null)(EditForm));