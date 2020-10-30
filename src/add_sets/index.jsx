import React, { Component } from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col, Card, CardGroup, CardDeck, onSubmit, handleSubmit, Button } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { IncorporationForm, Card_Form } from './Card_Form'

// use sortable.js for cards

function Add_Sets() {
  const user = accountService.userValue;

  const tests = [
    { value: 'Biology', label: 'biology' },
    { value: 'math', label: 'math' },
  ];

  const addSetsContainer = {
    margin: '100px 200px 0 290px',
  };

  const setsTop = {
    display: 'flex',
    minWidth: '700px',
    justifyContent:'space-between'
  };

  const levelLink = {
    margin: '0 80px 0 0',
    minWidth: '100px'
  };

  return (
    <div style={addSetsContainer}>

      <div style={setsTop}>
        <div style={{ margin: '0 10px 0 0' }}>
          <input placeholder="Set Name" type="text" style={{ width: '300px' }} />
        </div>

        <div style={{ width: '300px', margin: '0 0px 10px 10px' }} >
          <Select
            options={tests}
            className="mb-3"
            placeholder="Select test"
            isSearchable
            style={{ width: '250px', }} 
          />
        </div>
      </div>

      <div style={{ display: 'flex', margin: '80px 0' }}>
        <Link style={levelLink}>Base</Link>
        <Link style={levelLink}># of terms 1st level</Link>
        <Link style={levelLink}># of terms 2nd level</Link>
      </div>

      <Card_Form />


      {/* <Row style={{ marginBottom: '5rem' }}> */}
        {/* <Col md={3} /> */}
        {/* <Col> */}
          {/* <form class="form-inline">
            <div class="form-group">
              <input placeholder="Set Name"
                type="text" style={{ outline: '0' }} />
            </div>
          </form> */}
        {/* </Col> */}
        {/* <Col> */}
        {/* </Col> */}
        {/* <Col md={2}> */}
          {/* <Select
            options={tests}
            className="mb-3"
            placeholder="Select test"
            isSearchable
          /> */}
        {/* </Col> */}
        {/* <Col md={1} /> */}
      {/* </Row> */}
      {/* <Row style={{ marginBottom: '5rem' }}>
        <Col md={{ span: 2, offset: 3 }}>
          <Link style={{ color: 'black' }}>Base</Link>
        </Col>
        <Col md={{ span: 2 }}>
          <Link style={{ color: 'black' }}># of terms 1st level</Link>
        </Col>
        <Col md={{ span: 2 }}>
          <Link style={{ color: 'black' }}># of terms 2nd level</Link>
        </Col>
      </Row> */}
      {/* <Row>
        <Col md={{ span: 3, offset: 3 }}>
          <Card_Form />
        </Col>
        <Col> */}
          {/* Bad attempt at adding hoverable cards with cardeck
             
             <CardDeck style={{ width: '10rem' }}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                
              </Card>
    </CardDeck> */}
        {/* </Col>
      </Row> */}
    </div>

  );
}

export { Add_Sets };
