import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import JoblyApi from './api';
import { useContext } from 'react';
import UserContext from './UserContext';
import  { useHistory } from 'react-router';

const Signup = () => {
    const { signup } = useContext(UserContext);
    const history = useHistory();

    return (
        <div>
            <h2>Signup</h2>
            <Formik
                initialValues={{
                    username: '', 
                    password: '',
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                    } else if (!values.password) {
                        errors.password = 'Required';
                    } else if (!values.firstName) {
                        errors.firstName = 'Required';
                    } else if (!values.lastName) {
                        errors.lastName = 'Required';
                    } else if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        const res = await JoblyApi.registerUser(values);
                        signup(res.token);
                    } catch (e) {
                        alert(e);
                    }
                    setSubmitting(false);
                    resetForm();
                    history.push('/');
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field type="text" name="username" autoComplete="username" />
                        <ErrorMessage name="username" component="div" />
                        
                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" autoComplete="new-password" />
                        <ErrorMessage name="password" component="div" />
                        
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="div" />
                        
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="div" />
                        
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Sign Up!
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Signup;