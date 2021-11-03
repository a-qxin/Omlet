import React from 'react';
import { accountService } from '@/_services';
import {Set} from './Set.jsx'
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Sets() {
  const user = accountService.userValue;

  

  const dropdownsContainer = {
    margin: '60px 0 0 276px',
    padding: '0 12px',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const dropdownContainer = {
    position: 'relative',
    display:'block',
    width:'15em',
    height: '2em',
    lineHeight: '3',
    overflow:'hidden',
    borderRadius: '.25em',
    paddingBottom: '10px',
  };

  const dropdown = {
    appearance: 'none',
    outline: 0,
    // background: 'green',
    backgroundImage: 'none',
    width: '100%',
    height: '100%',
    color: 'black',
    cursor: 'pointer',
    // border:'1px solid black',
    // borderRadius: '3px'
  };

  const setContainer = {
    // background: '#eaeaea',
    margin: '60px 0 0 276px',
    width: '80%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const dottedBorder = {
    width: '419px',
    // width: '27%',
    height: '200px',    
    borderRadius: '20px',
    margin: '15px',
    border: '1.5px dashed #000000',
  };

  return (
    <div>

      {/* dropdowns */}
      <div style={dropdownsContainer}>
        <div style={dropdownContainer}>
          <select style={dropdown} name="sort-by" id="subject">
            <option value="volvo" >Subject</option>
            <option value="saab">Recent</option>
            <option value="mercedes">Lowest EXP</option>
          </select> 
        </div>
        &nbsp;&nbsp;&nbsp;
        <div style={dropdownContainer}>
          <select style={dropdown} name="classes" id="cars">
            <option value="volvo">All Classes</option>
            <option value="saab">BIO</option>
            <option value="mercedes">ARTH</option>
            <option value="audi">HIST</option>
            <option value="audi">FNRT</option>
          </select> 
        </div>
      </div>

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
