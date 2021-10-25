import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import JoblyApi from './api';
import UserContext from './UserContext';
import { useHistory } from 'react-router';

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
                {({ isSubmitting }) => (
                    <Form>                        
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
                            Save
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProfileForm;