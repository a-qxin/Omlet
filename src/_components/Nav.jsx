import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Searchbar } from '@/_components';

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

    const welcome = {
        fontSize: '2vw',
        top: '50px',
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
            <nav className="navbar navbar-expand vertical-nav">
                <Row style={{height:"100%", width:"100%"}}>
                    <Col>
                        <NavLink exact to="/" className="nav-item nav-link" style={omlet}>Omlet</NavLink>
                        {/* <Col><img src="/public/images/bird.jpg" alt="Logo"/></Col> */}
                        {/* <div id="sideLeft" className="col-lg-1"> */}
                        <NavLink exact to="/" className="nav-item nav-link" >Dashboard</NavLink>
                        <NavLink exact to="/" className="nav-item nav-link" >Sets</NavLink>
                        <NavLink exact to="/" className="nav-item nav-link" >Study Plan</NavLink>
                        <NavLink exact to="/" className="nav-item nav-link" >Metrics</NavLink>
                        <a onClick={accountService.logout} className="nav-item nav-link" >Logout</a>
                        {/* </div> */}
                    </Col>
                </Row>
            </nav>    
            
            <Col sm={1}/>
                
            <Row>
                <Col sm={3}/>
                <Col sm={5} style={{top:'20px'}}><Searchbar/></Col>
                <Col sm={3}/>
                <Col>
                    <NavLink to="/profile" className="nav-item nav-link pt-4" ><img src='public/images/omlet_mascot.png' style={{width:"40px", height:"40px"}}></img></NavLink>
                </Col>
            </Row>    
                                  
                    
                {user.role === Role.Admin &&
                    <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                }
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
