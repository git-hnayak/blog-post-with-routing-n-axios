import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Persist } from 'formik-persist'
import './SIgnup.css';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions/signup';
import * as Yup from 'yup';

class Signup extends Component {
    render() {
        // const initialVal = {
        //     firstName: '',
        //     lastName: '',
        //     email: ''
        // }

        const SignupSchema = Yup.object().shape({
            firstName: Yup.string().trim()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            lastName: Yup.string()
              .strict(false)
              .trim()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Required'),
          });
    
        const style = {
            margin: "0px auto",
            width: "400px"
        }
        
        return (
            <div>
                <h1>Signup</h1>
                <Formik onSubmit={values => this.props.onFormSubmit(values)}
                    initialValues={this.props.signupForm}
                    validationSchema={SignupSchema}
                    // validate={values => this.props.onFormChanged(values)} //it's a hack
                    // onReset={this.props.onFormReset}
                    render={props =>
                        <Form style={style}>
                            <div className="form-group text-left">
                                <label>First Name</label>
                                <Field name="firstName" className="form-control" placeholder="First Name" onChange={props.handleChange} autoComplete="off"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                <ErrorMessage name="firstName" component="div" style={{color: 'red'}} />
                            </div>
                            <div className="form-group text-left">
                                <label>Last Name</label>
                                <Field name="lastName" placeholder="Last Name" className="form-control" autoComplete="off" />
                                <ErrorMessage name="lastName" component="div" style={{color: 'red'}} />
                            </div>
                            <div className="form-group text-left">
                                <label>Email</label>
                                <Field name="email" type="email" placeholder="Email Address" className="form-control" />
                                <ErrorMessage name="email" component="div" style={{color: 'red'}} />
                            </div>
                            <button className="btn btn-primary" onClick={props.handleReset}>Reset</button>&nbsp;
                            <button type="submit" className="btn btn-primary">Submit</button>
                            {/* <Persist name="signup-form" /> */}
                        </Form>}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signupForm: state.signupFormValues
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFormChanged: (formVal) => dispatch(Actions.changeSignup(formVal)),
        onFormSubmit: (formVal) => dispatch(Actions.doSignup(formVal)),
        onFormReset: () => dispatch(Actions.resetSignup()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);