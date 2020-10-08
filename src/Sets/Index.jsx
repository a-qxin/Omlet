import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Sets() {
  const user = accountService.userValue;

  const dottedBorder = {
    width: '300px',
    height: '200px',
    border: '1.5px dashed #000000',
    borderRadius: '20px',
    marginLeft: '400px'
  };

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

  return (
    <div>
      <Row>
        <Col></Col>
        <Col style={welcome}>
          Sets
          <hr style={border} />
        </Col>
      </Row>
      <Col></Col>

      <div style={dottedBorder}>
        <div className="text" style={{ textAlign: 'center', margin: 'auto', padding: '80px 0' }}>
          <p>+ &nbsp;&nbsp;&nbsp; New Set</p>
          <div style={{ marginTop: '-10px' }}>
            <hr className='rainbow' ></hr>
          </div>
        </div>
      </div>

    </div>
  );
}

export { Sets };
