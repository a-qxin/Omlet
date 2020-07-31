import React from 'react';
<<<<<<< HEAD
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';
=======

import { accountService } from '@/_services';
>>>>>>> master

function Home() {
    const user = accountService.userValue;
    
<<<<<<< HEAD
    const welcome = {
      fontSize: '2vw',
      ///  paddingLeft: '50px',
        /// paddingBottom: '50px'
      }; 
    const weekly = {
      fontSize: '20px',
      };
    const border = {
        border: '1px solid #C4C4C4',
        width: '77vw',
  
      };
      
    const recent = {
      top: '10vw',
      };
    /* const logo = {
        position: 'relative',
        right: '-1500px',
        bottom: '470px'

    }; */

    /// Code returned when user reaches home page
    return (
        <div>
              <Row>
                <Col>
                </Col>
                 <Col style={welcome}>
                    Welcome back <b>{user.firstName}</b>                              
                    <hr style={border} />
                  </Col>
                </Row>
              <Row>
              <Col></Col>
              <Row> </Row>
              <Row>
              <Col style={weekly}> 
                Weekly Study Time:   
              </Col>
              </Row>
              <Col></Col>
              <Col>
              <a href='/' style={recent}>
                Recently Studied
                <hr />
              </a>
              </Col>
              </Row>
        </div>

    );
}

export { Home };
=======
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
            </div>
        </div>
    );
}

export { Home };
>>>>>>> master
