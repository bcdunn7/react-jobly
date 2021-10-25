import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import JoblyApi from './api';
import UserContext from './UserContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';

const LoginForm = () => {
    const { login } = useContext(UserContext);
    const history = useHistory();

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
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        const res = await JoblyApi.loginUser(values);
                        console.log(res);
                        login(res.token);
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