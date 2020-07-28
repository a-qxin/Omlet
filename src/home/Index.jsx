import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    const user = accountService.userValue;
    
    const welcome = {
        fontSize: '2vw',
      ///  paddingLeft: '50px',
        /// paddingBottom: '50px'
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
              </Col>
              </Row>
            </Container>
        </div>

    );
}

export { Home };
