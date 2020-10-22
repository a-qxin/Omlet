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
  
  // const set = {
  //   width: '300px',
  //   height: '200px',
  //   borderRadius:'20px',
  //   margin: '12px',
  //   boxShadow: '0 4px 20px rgba(0, 0, 0, .25)',
  //   background: '#ffffff',
  //   display:'flex'
  // };

  // const setAccentGreen = {
  //   width: '14px',
  //   borderRadius:'20px 0 0 20px',
  //   height: '100%',
  //   background: '#2ee340'
  // };
  // const setAccentRed = {
  //   width: '14px',
  //   borderRadius:'20px 0 0 20px',
  //   height: '100%',
  //   background: '#ff6767'
  // };
  // const setAccentBlue = {
  //   width: '14px',
  //   borderRadius:'20px 0 0 20px',
  //   height: '100%',
  //   background: '#00cabe'
  // };
  // const setAccentPurple = {
  //   width: '14px',
  //   borderRadius:'20px 0 0 20px',
  //   height: '100%',
  //   background: '#B073ff'
  // };

  // const setContents = {
  //   margin: '30px 30px',
  //   width: '100%',
  //   position:'relative',
  // };

  // const setDetails = {
  //   position: 'absolute',
  //   bottom: '0',
  //   width:'100%'
  // };

  // const setTitle = {
  //   fontWeight: '600',
  //   fontSize: '26px',
  //   lineHeight: '30px',
  //   marginBottom:'8px'
  // };

  // const courseCode = {
  //   fontSize:'14px',
  //   lineHeight:'14px',
  //   margin:'0px'
  // };

  // const setHr = {
  //   border: '1px solid #c4c4c4',
  //   margin: '8px 0px'
  // };

  // const numTerms = {
  //   fontSize:'14px',
  //   lineHeight:'14px',
  //   margin:'0px'
  // };

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
        <Set/>
        <Set/>
        <Set/>
        <Set/>
        <Set/>

      </div>

    </div>
  );
}

export { Sets };
