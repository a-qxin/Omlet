import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';
// import { NavLink, Route } from 'react-router-dom';


function Home() {
  const user = accountService.userValue;

  const homeContainer = {
    height: '100%',
    margin: '0 40px 0 290px',
  };
  const border = {
    border: '1px solid #C4C4C4',
    width: '100%',
    marginTop: '30px',
    marginRight: '36px',
  };
  const setTabs = {
    display: 'flex',
    margin: '30px 0px 30px 0',
    float: 'right'
  };

  return (
    <div>
      <div style={homeContainer}>
        <div style={{display:'flex', alignItems:'flex-end'}}>
          <h4 style={{margin:'0 14px 10px 0', color: '#717171', letterSpacing:'2px'}}>Welcome Back </h4> 
          <h1><b>{user.firstName}</b></h1>
        </div>
        
        <hr style={border} />

        <div style={{ display: 'flex'}}>

          {/* stats */}
          <div>
            <div style={{ width: '100%', marginTop: '80px', marginRight:'20vw', display: 'flex' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '100%', boxShadow: '0px 2px 8px #c4c4c4', }}>
                <div style={{ width: '80px', height: '80px', margin: '10px', borderRadius: '100%', background: '#ffe566' }}>

                </div>
              </div>

              <div style={{ display: 'flex', height: '100%', margin: '40px 0 0 10px' }}>
                <div style={{ margin: '10px 0 0 10px', }}>
                  <p style={{color:'#717171'}}>Weekly Study Time: </p>
                </div>
                <div style={{ margin: '0px 0 0px 10px', }}>
                  <h2><b>14 hours left</b></h2>
                </div>
              </div>
            </div>

            <div style={{display:'flex', height:'100%', margin:'50px 0 0 0'}}>
              <div style={{ margin: '10px 0 0 10px', }}>
                  <p style={{color:'#717171'}}>Weekly exp growth: </p>
                </div>
                <div style={{ margin: '0px 0 0px 10px', }}>
                  <h2><b>1900pt</b></h2>
                </div>
            </div>
          </div>

          {/* sets */}
          <div>
            <div style={setTabs}>
              <div style={{ marginRight: '150px' }}>
                <a href='/'>Recently Studied</a>
                <hr style={{ border: '1px solid black', width: '125px' }} />
              </div>

              <div>
                <a href='/add_sets' style={{ textDecoration: 'none' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="https://img.icons8.com/android/24/000000/plus.png" />
                  <b>&nbsp;&nbsp;&nbsp;Add Set</b>
                </a>
                <hr class='rainbow'></hr>
              </div>
            </div>

            {/* setlist */}
            <div>
              <h4><b>Defence Against the Dark Arts</b></h4>
              <p>DADA - 101</p>
              <hr />
            </div>

            <div>
              <h4><b>Potions</b></h4>
              <p>PTNS - 101</p>
              <hr />
            </div>

            <div>
              <h4><b>History of Magic</b></h4>
              <p>HOM - 101</p>
              <hr />
            </div>

            <div>
              <h4><b>Transfiguration</b></h4>
              <p>TNFG - 101</p>
              <hr />
            </div>

          </div>
          
        </div>

      </div>
    </div>

  );
}

export { Home };
