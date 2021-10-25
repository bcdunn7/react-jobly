import React from 'react';
import { Formik, Form } from 'formik';
import JoblyApi from './api';
import UserContext from './UserContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { TextField, Button } from '@mui/material';
import './LoginForm.css';

const LoginForm = () => {
    const { login } = useContext(UserContext);
    const history = useHistory();
    let submitError = null;

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
                        submitError = null;
                        const res = await JoblyApi.loginUser(values);
                        login(res.token);
                        setSubmitting(false);
                        resetForm();
                        history.push('/');
                    } catch (e) {
                        submitError = e;
                        resetForm();
                        setSubmitting(false);
                    }
                }}
            >
                {({ values, errors, touched, handleChange, isSubmitting, initialValues }) => (
                    <Form className="LoginForm">
                        <TextField 
                            id="username" 
                            name="username" 
                            label="Username" 
                            variant="outlined"
                            defaultValue={initialValues.username} 
                            onChange={handleChange}
                            value={values.username}
                            error={errors.username && touched.username ? true : false}
                            helperText={errors.username && touched.username ? `${errors.username}` : undefined}
                            margin="normal"
                            fullWidth
                            autoComplete="username"
                        />

                        <TextField 
                            id="password" 
                            type="password"
                            name="password" 
                            label="Password" 
                            variant="outlined"
                            defaultValue={initialValues.password} 
                            onChange={handleChange}
                            value={values.password}
                            error={errors.password && touched.password ? true : false}
                            helperText={errors.password && touched.password ? `${errors.password}` : undefined}
                            margin="normal"
                            fullWidth
                            autoComplete="current-password"
                        />
                        {submitError ? <p className="submitError">{submitError}</p> : null}
                        <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
                            Login
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;