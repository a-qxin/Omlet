import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Searchbar } from '@/_components';

// import { Role } from '@/_helpers';
import { accountService } from '@/_services';

import { Container, Row, Col } from 'react-bootstrap';
// import { Form, Button, FormControl } from 'react-bootstrap';

    const omlet = {
        color: 'black',
        fontSize: '40px',
        };

    const welcome = {
        fontSize: '2vw',
        top: '50px',
    }; 
    const navlinks = {
        color: 'black'
    };

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
                <Row style={{height:"100%"}}>
                    <Col>
                        <NavLink exact to="/" className="nav-item nav-link" style={omlet}>Omlet <img src='public/images/omlet-logo.png' style={{ width: "40px", height: "40px" }} /> </NavLink>
                        <NavLink exact to="/" className="nav-item nav-link" style={navlinks}>Dashboard</NavLink>
                        <NavLink exact to="/sets" className="nav-item nav-link" style={navlinks} >Sets</NavLink>
                        <NavLink exact to="/study_plan" className="nav-item nav-link" style={navlinks} >Study Plan</NavLink>
                        <NavLink exact to="/metrics" className="nav-item nav-link" style={navlinks}>Metrics</NavLink>
                        <a onClick={accountService.logout} className="nav-item nav-link" >Logout</a>
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
                                  
                    
            {/* {user.role === Role.Admin &&
                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
            }
            <Route path="/admin" component={AdminNav} /> */}
        </div>
    );
}

// function AdminNav({ match }) {
//     const { path } = match;

//     return (
//         <nav className="admin-nav navbar navbar-expand navbar-light">
//             <div className="navbar-nav">
//                 <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
//             </div>
//         </nav>
//     );
// }

export { Nav }; 
