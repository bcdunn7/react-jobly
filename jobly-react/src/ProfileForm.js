import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import JoblyApi from './api';
import UserContext from './UserContext';
import { useHistory } from 'react-router';
import { TextField, Button } from '@mui/material';
import './ProfileForm.css'

const ProfileForm = () => {
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    return (
        <div>
            <h2>Profile</h2>
            <Formik
                initialValues={{
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }}
                validate={values => {
                    const errors = {};
                    if (!values.firstName) {
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
                        const res = await JoblyApi.patchUser(user.username, values);
                        setUser(res.user);
                    } catch (e) {
                        alert(e);
                    }
                    setSubmitting(false);
                    resetForm();
                    history.push('/');
                }}
            >
                {({ values, errors, touched, handleChange, isSubmitting, initialValues }) => (
                    <Form className="ProfileForm">                        
                        <TextField 
                            id="firstName" 
                            name="firstName" 
                            label="First Name" 
                            variant="outlined"
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
                            onChange={handleChange}
                            value={values.email}
                            error={errors.email && touched.email ? true : false}
                            helperText={errors.email && touched.email ? `${errors.email}` : undefined}
                            margin="normal"
                            fullWidth
                        />

                        <Button variant="contained" fullWidth type="submit" disabled={isSubmitting}>
                            Save
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileForm;