import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { Role } from '@/_helpers';
import { accountService } from '@/_services';

import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button, FormControl } from 'react-bootstrap';

     const omlet = {
        color: 'black',
        fontSize: '40px',
      ///  paddingLeft: '50px',
        /// paddingBottom: '50px'
        };

    /* const sidebar = {
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'black',
      fontSize: '20px',
      paddingTop: '60px',
      paddingLeft: '50px', 
        }; */

function Nav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div class="container">
                    <Row>
                    <Col><NavLink exact to="/" className="nav-item nav-link" style={omlet}>Omlet</NavLink></Col>
                    <Col><img src="/public/images/bird.jpg" alt="Logo"/></Col>
                    </Row>
                    <Form inline class="col">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Row><NavLink exact to="/" className="nav-item nav-link" >Home</NavLink></Row>
                    <Row><NavLink to="/profile" className="nav-item nav-link" >Profile</NavLink></Row>
                    <Row><a onClick={accountService.logout} className="nav-item nav-link" >Logout</a></Row>
                    {user.role === Role.Admin &&
                        <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                    }
                </div>
            </nav>
            <Route path="/admin" component={AdminNav} />
        </div>
    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav className="admin-nav navbar navbar-expand navbar-light">
            <div className="navbar-nav">
                <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

export { Nav }; 