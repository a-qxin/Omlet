import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';

function Details({ match }) {
  const { path } = match;
  const user = accountService.userValue;

  const circleContainer = {
    width: '60px',
  };

  const circle = {
    margin: '0 0 80px 0',
    height: '60px',
    maxWidth: '60px',
    borderRadius: '100%',
    background: 'white',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.6)',
    // -moz-box-shadow: 10px -10px  rgba(0,0,0,0.6);
    // -webkit-box-shadow: 10px -10px  rgba(0,0,0,0.6);
    // -o-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  };

  const navlinks = {
    color: 'black',
    fontSize: '13px',
  };

  const navIcons = {
    width: '28px',
    height: 'auto',
    margin: '17px 16px',
  };

  const olly = {
    width: '240px',
  };

  const username = {
    fontWeight: 'bold',
    letterSpacing: '2.5px',
  };

  return (
    <div style={{padding:'0 100px 100px 0'}}>

      <div style={circleContainer}>
        <div style={circle}>
          <Link exact to="/" style={navlinks}>
            <img src='public/images/x.svg' style={navIcons} />
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div>
          <img src='public/images/omlet-mascot.svg' style={olly} />
        </div>

        <div style={{ paddingLeft: '100px' }}>
          <h2 style={username}> {user.firstName} </h2>
          <br />
          <button className='wide-yellow-button' disabled> Edit Olly (coming soon) </button>
        </div>
        
      </div>
      
      <br /><br />
      <hr/>

      <div>
        <p>
          <br /><br />
          <b>Username: </b> {user.firstName}
          <br /><br />
          <b>Email: </b> {user.email}
        </p>
      </div>

      <div>
        <br />
        <p>
          <Link to={`${path}/update`} className='yellow-border-button'>Change Account Information</Link>
          <br /><br />
          <div style={{width:'270px', textAlign:'center' }} className='yellow-button'>
              <a onClick={accountService.logout} >Log Out</a>
          </div>
        </p>
      </div>

    </div>
  );
}

export { Details };