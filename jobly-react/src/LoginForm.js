import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
    return (
        <div>
            <h2>Login to Jobly</h2>
            <Formik
                initialValues={{username: '', password: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required';
                    } else if (!values.password) {
                        errors.password = 'Required';
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
                        <label htmlFor="username">Username</label>
                        <Field type="text" name="username" autoComplete="username" />
                        <ErrorMessage name="username" component="div" />

                        <label htmlFor="password">Password</label>
                        <Field type="password" name="password" autoComplete="current-password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;