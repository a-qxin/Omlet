import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function Register({ history }) {
    const centerText = {
        textAlign:'center',
    };
    const fieldWidth = {
        width: '400px',
        padding:'10px 0 10px 0',
    }
    
    const regButton = {
        backgroundColor: '#ffe566 !important',
        color: '#ffe566 !important',
        padding: 'none'
    }
    
    const initialValues = {
        title: '',
        firstName: '',
        // lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    };

    const validationSchema = Yup.object().shape({
        // title: Yup.string()
        //     .required('Title is required'),
        firstName: Yup.string()
            .required('Username is required'),
        // lastName: Yup.string()
        //     .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.register(fields)
            .then(() => {
                alertService.success('Registration successful, please check your email for verification instructions', { keepAfterRouteChange: true });
                history.push('login');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h3 style={{textAlign:'center', letterSpacing:'0.06em'}}><b>Create Profile</b></h3>
                    <div className="card-body" style={centerText}>
                        <div className="form-group">
                            <Field 
                                placeholder="Username" 
                                name="firstName" 
                                type="text" 
                                style={fieldWidth} 
                                className={(errors.firstName && touched.firstName ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field 
                                placeholder="Email" 
                                name="email" 
                                type="text" 
                                style={fieldWidth} 
                                className={(errors.email && touched.email ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field 
                                placeholder="Password" 
                                name="password" 
                                type="password" 
                                style={fieldWidth} 
                                className={(errors.password && touched.password ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field 
                                placeholder="Confirm Password" 
                                name="confirmPassword" 
                                type="password" 
                                style={fieldWidth} 
                                className={(errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group form-check" style={{margin: '20px 0 0 -170px', color: '#a3a3a3'}}>
                            <Field 
                                type="checkbox" 
                                name="acceptTerms" 
                                id="acceptTerms" 
                                className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} 
                            />
                            <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group" style={{paddingTop: '30px'}}>
                            <button 
                                id="yellowButton" 
                                type="submit" 
                                disabled={isSubmitting}
                                style={{marginRight:'10px'}}
                            >
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"/>}
                                Register
                            </button>
                            <Link id="yellowBorderButton" to="login" style={{marginLeft: '10px'}} className="btn btn-link">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Register }; 