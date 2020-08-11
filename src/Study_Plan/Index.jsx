import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';

function Study_Plan() {
    const user = accountService.userValue;
    
    const welcome = {
      fontSize: '2vw',
 
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
    
      const underline1 = {
        width: '9vw',
    };
    
    const underline2 = {
        width: '6vw',
        marginLeft: '0',
    };

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
              <Col sm={8} />
              <Row>
              <Col > 
              <a href='/' >
                Upcoming
                <hr style={underline1}/>
              </a>
              </Col>
              </Row>
              <Col />
              <Col>
              <a href='/'>
              <img src="https://img.icons8.com/android/24/000000/plus.png"/>
               New Test
                <hr style={underline2}/>
              </a>
              </Col>
              </Row>
        </div>

    );
}

export { Study_Plan };
