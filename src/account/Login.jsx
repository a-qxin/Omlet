import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function Login({ history, location }) {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit({ email, password }, { setSubmitting }) {
        alertService.clear();
        accountService.login(email, password)
            .then(() => {
                const { from } = location.state || { from: { pathname: "/" } };
                history.push(from);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h3 style={{textAlign:'center', marginTop:'10px', marginBottom:'80px'}}>Log In</h3>
                    <div>
                        <div className="form-group" style={{textAlign:'center'}}>
                            {/* <label>Email</label> */}
                            <Field placeholder="Email" name="email" type="text" className={ (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group" style={{textAlign:'center'}}>
                            {/* <label>Password</label> */}
                            <Field placeholder="Password" name="password" type="password" className={ (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className='form-group' style={{textAlign:'center' }}>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Login
                                </button>
                        </div>
                        <div className="form-row">
                           <div style={{margin:'auto'}}>
                                <div className="row">
                                    <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link>
                                </div>

                                <div className="row">
                                    <Link to="register" className="btn btn-link">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Login }; 