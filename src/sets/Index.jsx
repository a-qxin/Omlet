import React from 'react';
import { accountService } from '@/_services';
import {Set} from './Set.jsx'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// TODO: convert set to separate component

function Sets() {
  const user = accountService.userValue;

  const setContainer = {
    margin: '60px 0 0 276px',
    width: '972px',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const dottedBorder = {
    width: '300px',
    height: '200px',    
    borderRadius: '20px',
    margin: '12px',
    border: '1.5px dashed #000000',
  };

  return (
    <div>
      {/* new set */}
      <div style={setContainer}>
        
        <div style={dottedBorder}>
          <div className="text" style={{ textAlign: 'center', margin: 'auto', padding: '80px 0' }}>
            <a style={{textDecoration:'none'}} href="/add_sets">+ &nbsp;&nbsp;&nbsp; New Set</a>
            <div style={{ marginTop: '-10px' }}>
              <hr className='rainbow' />
            </div>
          </div>
        </div>

        {/* user's sets to map */}
        <Set/>
        {/* <Set/>
        <Set/>
        <Set/>
        <Set/>
        <Set/> */}

      </div>

    </div>
  );
}

export { Sets };
