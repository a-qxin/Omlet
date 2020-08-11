import React, { Component } from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'; 
import { Link } from 'react-router-dom';

function Add_Sets() {
    const user = accountService.userValue;

    const tests = [
      { value : 'Biology', label: 'biology'},
      { value : 'math', label: 'math'},
    ];
    
    /* const welcome = {
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
      }; */
   
    return (
        <div>
              <Row style={{marginBottom: '5rem'}}>
                <Col md={3}/>
                 <Col>
                 <form class="form-inline">
                    <div class="form-group">
                        <input placeholder="Set Name"
                            type="text" style={{outline: '0'}} />
                    </div>        
                  </form>
                  </Col>
                  <Col md={2}>
                  <Select 
                    options={tests}
                    className="mb-3"
                    placeholder="Select test"
                    isSearchable
                      />
                  </Col>
                  <Col md={1}/>
                </Row>
                <Row style={{marginBottom: '5rem'}}>
                  <Col md={{ span: 2, offset: 3 }}>
                    <Link style={{color: 'black'}}>Base</Link>
                  </Col>
                  <Col md={{ span: 2 }}>
                    <Link style={{color: 'black'}}># of terms 1st level</Link>
                  </Col>
                  <Col md={{ span: 2 }}>
                    <Link style={{color: 'black'}}># of terms 2nd level</Link>
                  </Col>
                </Row>
              <Row>
              <Col md={{ span: 3, offset: 3 }}>
              <Card style={{ width: '40rem' }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                  <form class="form-inline">
                    <div class="form-group">
                        <input placeholder="Term"
                            type="text" style={{outline: '0', marginRight: '3rem'}} />
                    </div>        
                    <div class="form-group" >
                        <input placeholder="Definition"
                            type="text" style={{outline: '0'}} />
                    </div>
                  </form>
                  </Card.Text>
                  
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/windows/32/000000/play.png"/></Button>
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/small/16/000000/delete.png"/></Button>
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/small/16/000000/resize-vertical.png"/></Button>
                </Card.Body>
              </Card></Col>
              <Col>
              </Col>
              </Row>
        </div>

    );
}

export { Add_Sets };
