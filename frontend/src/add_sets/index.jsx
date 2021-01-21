import React, { Component } from 'react';
import { accountService } from '@/_services';
// import { Container, Row, Col, Card, CardGroup, CardDeck, onSubmit, handleSubmit, Button } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Card_Form } from './Card_Form'

// use sortable.js for cards

function Add_Sets() {
  const user = accountService.userValue;

  const tests = [
    { value: 'Biology', label: 'biology' },
    { value: 'math', label: 'math' },
  ];

  const addSetsContainer = {
    margin: '100px 200px 0 220px',
  };

  const setsTop = {
    display: 'flex',
    minWidth: '700px',
  };

  const levelLink = {
    margin: '0 80px 0 0',
    minWidth: '100px',
  };

  return (
    <div style={addSetsContainer}>

      <div style={setsTop}>
        <div style={{ margin: '0 10px 0 70px' }}>
          <input placeholder="Set Name" type="text" style={{ width: '300px', padding: '0 10px 16px 2px' }} />
        </div>

        <div style={{ width: '250px', margin: '0 0 10px 210px' }} >
          <Select
            options={tests}
            className="mb-3"
            placeholder="Select test"
            isSearchable
            style={{ width: '250px', }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', margin: '80px 0 80px 70px' }}>
        <div style={{ height: '50px' }}>
          <Link style={levelLink}>Base</Link>
          {/* <br style={}></br> */}
        </div>
        <div>
          <Link style={levelLink}># terms</Link>
        </div>
        <div>
          <Link style={levelLink}># terms</Link>
        </div>
      </div>

      <div style={{marginLeft:'-44px'}}>
        <Card_Form />
      </div>

    </div>

  );
}

export { Add_Sets };
