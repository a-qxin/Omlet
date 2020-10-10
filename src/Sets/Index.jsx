import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Sets() {
  const user = accountService.userValue;

  const setContainer = {
    margin: '60px 0 0 350px',
    width: '972px',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const set = {
    width: '300px',
    height: '200px',
    borderRadius:'20px',
    margin: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, .25)',
    background: '#ffffff',
    display:'flex'
  };

  const dottedBorder = {
    width: '300px',
    height: '200px',    
    borderRadius: '20px',
    margin: '12px',
    border: '1.5px dashed #000000',
  };

  const setAccent = {
    width: '18px',
    borderRadius:'20px 0 0 20px',
    height: '100%',
    background: '#2ee340'
  };

  const setContents = {
    margin: '30px 30px',
  };

  const setTitle = {
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '30px',
    marginBottom:'8px'

  };

  const courseCode = {
    fontSize:'14px',
    lineHeight:'14px',
    margin:'0px'
  };

  const setHr = {
    border: '1px solid #c4c4c4',
    margin: '8px 0px'
  };

  const numTerms = {
    fontSize:'14px',
    lineHeight:'14px',
    margin:'0px'
  };

  return (
    <div>

      <div style={setContainer}>
        <div style={dottedBorder}>
          <div className="text" style={{ textAlign: 'center', margin: 'auto', padding: '80px 0' }}>
            <p>+ &nbsp;&nbsp;&nbsp; New Set</p>
            <div style={{ marginTop: '-10px' }}>
              <hr className='rainbow' ></hr>
            </div>
          </div>
        </div>

        <div style={set}>
          <div style={setAccent}></div>
          <div style={setContents}>
            <div>
              <p style={setTitle}>Defence Against the Dark Arts</p>
              <p style={courseCode}>DADA - 101</p>
              <hr style={setHr} />
              <p style={numTerms}>5 Terms</p>
            </div>
            
          </div>
        </div>

        <div style={set}>
        </div>
        <div style={set}>
        </div>
        <div style={set}>
        </div>
        <div style={set}>
        </div><div style={set}>
        </div><div style={set}>
        </div><div style={set}>
        </div>

      </div>

    </div>
  );
}

export { Sets };
