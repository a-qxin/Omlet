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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\nbody {margin: 0;}\n\nul.sidenav {\n  list-style-type: none;\n  margin: 0;\n  margin-Top: 15%; padding: 0;\n  width: 25%;\n  background-color: #f1f1f1;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n}\n\nul.sidenav li a {\n  display: block;\n  color: #000;\n  padding: 8px 16px;\n  text-decoration: none;\n}\n \nul.sidenav li a.active {\n  background-color: #4CAF50;\n  color: white;\n}\n\nul.sidenav li a:hover:not(.active) {\n  background-color: #555;\n  color: white;\n}\n\ndiv.content {\n  margin-left: 25%;\n  padding: 1px 16px;\n  height: 1000px;\n}\n\n@media screen and (max-width: 900px) {\n  ul.sidenav {\n    width: 100%;\n    height: auto;\n    position: relative;\n  }\n  \n  ul.sidenav li a {\n    float: left;\n    padding: 15px;\n  }\n  \n  div.content {margin-left: 0;}\n}\n\n@media screen and (max-width: 400px) {\n  ul.sidenav li a {\n    text-align: center;\n    float: none;\n  }\n}\n"
          }}
        />
        <ul className="sidenav">
          <li>
          <NavLink exact to="/" className="nav-item nav-link" >Home</NavLink>
          </li>
          <li>
           <a onClick="/profile" className="nav-item nav-link" >Profile</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
          <li>
          {user.role === Role.Admin &&
                                <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                            }
                                <Route path="/admin" component={AdminNav} />
          </li>
          <li>
           <a onClick={accountService.logout} className="nav-item nav-link" >Logout</a>
          </li>
        </ul>

        <div className="content">
          <h2> Welcome back {user.firstName}!</h2>
          <p>
            T
          </p>
          <p>
            W
          </p>
          <p>
            Y
          </p>
          <h3>R</h3>
        </div>
       
                  
          

      <div>
          <Form inline class="col">
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                  </Form>
                  <img src="/public/images/bird.jpg" alt="Logo"/>
      </div>
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