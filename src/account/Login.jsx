import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { accountService, alertService } from '@/_services';

function Login({ history, location }) {
    const centerText = {
        textAlign:'center'
    };

    const initialValues = {
        email: '',
        password: ''
    };

    const fieldWidth = {
        width: '400px',
        padding:'8px 0 10px 0',

    }

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
                    <h3 style={{textAlign:'center', marginBottom:'80px', letterSpacing:'.06em'}}>
                        <b>Log In</b>
                    </h3>
                    
                    <div>
                        <div className="form-group" style={centerText}>
                            <Field 
                                placeholder="Email" 
                                name="email" 
                                type="text" 
                                style={fieldWidth} 
                                className={ (errors.email && touched.email ? ' is-invalid' : '')}
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group" style={centerText}>
                            <Field 
                                placeholder="Password" 
                                name="password" 
                                type="password" 
                                style={fieldWidth} 
                                className={ (errors.password && touched.password ? ' is-invalid' : '')} 
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className='form-group' style={{paddingTop:'30px', textAlign:'center'}}>
                            <button 
                                id="yellowButton" 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="btn"
                            >
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1" />}
                                Login
                            </button>
                        </div>

                        <div className="form-row">
                            <div className="form-group col text-center">
                                <Link to="register" className="btn btn-link">Register</Link>
                                <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link> 
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export { Login }; 