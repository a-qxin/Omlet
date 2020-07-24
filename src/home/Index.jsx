import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
    const user = accountService.userValue;
    
    /*const message = {
        position: 'relative',
        top: '-350px',
        right: '-210px', 

    }; */
    /* const logo = {
        position: 'relative',
        right: '-1500px',
        bottom: '470px'

    }; */

    
    return (
        <div>
            <div>
            <Container>
              <Row className="justify-content-md-center">
              <Col>Welcome back {user.firstName}!</Col>
              </Row>
            </Container>
            </div>
        </div>

    );
}

export { Home };