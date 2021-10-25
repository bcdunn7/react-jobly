import React from 'react';
import { Formik, Form } from 'formik';
import JoblyApi from './api';
import { useContext } from 'react';
import UserContext from './UserContext';
import  { useHistory } from 'react-router';
import { TextField, Button } from '@mui/material';
import './SignupForm.css';

const Signup = () => {
    const { signup } = useContext(UserContext);
    const history = useHistory();
    let submitError = null;

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
                        submitError = null;
                        const res = await JoblyApi.registerUser(values);
                        signup(res.token);
                        setSubmitting(false);
                        resetForm();
                        history.push('/');
                    } catch (e) {
                        submitError = e;
                        setSubmitting(false);
                        resetForm();
                    }
                }}
            >
                {({ values, errors, touched, handleChange, isSubmitting, initialValues }) => (
                    <Form className="SignupForm">
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
                            autoComplete="new-password"
                        />
                        
                        <TextField 
                            id="firstName" 
                            name="firstName" 
                            label="First Name" 
                            variant="outlined"
                            defaultValue={initialValues.firstName} 
                            onChange={handleChange}
                            value={values.firstName}
                            error={errors.firstName && touched.firstName ? true : false}
                            helperText={errors.firstName && touched.firstName ? `${errors.firstName}` : undefined}
                            margin="normal"
                            fullWidth
                        />

                        <TextField 
                            id="lastName" 
                            name="lastName" 
                            label="Last Name" 
                            variant="outlined"
                            defaultValue={initialValues.lastName} 
                            onChange={handleChange}
                            value={values.lastName}
                            error={errors.lastName && touched.lastName ? true : false}
                            helperText={errors.lastName && touched.lastName ? `${errors.lastName}` : undefined}
                            margin="normal"
                            fullWidth
                        />
                        
                        <TextField 
                            id="email" 
                            name="email" 
                            label="Email" 
                            variant="outlined"
                            defaultValue={initialValues.email} 
                            onChange={handleChange}
                            value={values.email}
                            error={errors.email && touched.email ? true : false}
                            helperText={errors.email && touched.email ? `${errors.email}` : undefined}
                            margin="normal"
                            fullWidth
                        />
                    
                        <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
                            Sign Up!
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Signup;