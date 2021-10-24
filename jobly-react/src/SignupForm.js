import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Signup = () => {
    return (
        <div>
            <h2>Signup</h2>
            <Formik
                initialValues={{
                    username: '', 
                    password: '',
                    firstname: '',
                    lastname: '',
                    email: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                    } else if (!values.password) {
                        errors.password = 'Required';
                    } else if (!values.firstname) {
                        errors.firstname = 'Required';
                    } else if (!values.lastname) {
                        errors.lastname = 'Required';
                    } else if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlForm="username">Username</label>
                        <Field type="text" name="username" autoComplete="username" />
                        <ErrorMessage name="username" component="div" />
                        
                        <label htmlForm="password">Password</label>
                        <Field type="password" name="password" autoComplete="new-password" />
                        <ErrorMessage name="password" component="div" />
                        
                        <label htmlForm="firstname">First Name</label>
                        <Field type="text" name="firstname" />
                        <ErrorMessage name="firstname" component="div" />
                        
                        <label htmlForm="lastname">Last Name</label>
                        <Field type="text" name="lastname" />
                        <ErrorMessage name="lastname" component="div" />
                        
                        <label htmlForm="email">Email</label>
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