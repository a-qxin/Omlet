import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import { accountService } from '@/_services';

import { Login } from './Login';
import { Register } from './Register';
import { VerifyEmail } from './VerifyEmail';
import { ForgotPassword } from './ForgotPassword';
import { ResetPassword } from './ResetPassword';

function Account({ history, match }) {
    const { path } = match;

    const logo = {
        width: '100px',
        height:'auto',
        margin:'30px'
    };
    const fixImage = {
        width:'100%',
        height:'55vh',
        position:'absolute',
        zIndex:'2'
    };

    useEffect(() => {
        // redirect to home if already logged in
        if (accountService.userValue) {
            history.push('/');
        }
    }, []);

    return (
        <div>
            <img src='../public/images/omlet-logo-black.png' style={ logo }></img>

            <div className="container">
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 mt-5">
                        <div>
                            <Switch>
                                <Route path={`${path}/login`} component={Login} />
                                <Route path={`${path}/register`} component={Register} />
                                <Route path={`${path}/verify-email`} component={VerifyEmail} />
                                <Route path={`${path}/forgot-password`} component={ForgotPassword} />
                                <Route path={`${path}/reset-password`} component={ResetPassword} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

            <img src='../public/images/login-bg.png' style={ fixImage }></img>
        </div>
    );
}

export { Account };