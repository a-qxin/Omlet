import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';

function Sets() {
    const user = accountService.userValue;

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
                Sets                    
                <hr style={border} />
                  </Col>
                </Row>
              <Row>
              <Col></Col>
              <Row> </Row>
              <Row>
              <Col style={weekly}> 
              </Col>
              </Row>
              <Col></Col>
              <Col>

              </Col>
              </Row>
        </div>

    );
}

export { Sets };
