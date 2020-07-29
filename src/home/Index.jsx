import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    const user = accountService.userValue;
    
    const welcome = {
        fontSize: '1vw',
      ///  paddingLeft: '50px',
        /// paddingBottom: '50px'
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
             <Container>
                <Row>
                 <Col style={welcome}>
                    Welcome back <b>{user.firstName}</b>                              
                    <hr style={border} />
                  </Col>
                </Row>
              <Row>
              <Col style={welcome}> 
                Weekly Study Time:   
              </Col>
              </Row>
              <a href='/' style={recent}>
                Recently Studied
                <hr />
              </a>
              </Container>
        </div>

    );
}

export { Home };
