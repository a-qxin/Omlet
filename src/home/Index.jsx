import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col } from 'react-bootstrap';
// import { NavLink, Route } from 'react-router-dom';


function Home() {
  const user = accountService.userValue;

  // const welcome = {
  //   fontSize: '2vw',
  //   ///  paddingLeft: '50px',
  //   /// paddingBottom: '50px'
  // };
  // const weekly = {
  //   fontSize: '20px',
  // };

  

  // const underline1 = {
  //   width: '9vw',
  // };

  // const underline2 = {
  //   width: '6vw',
  //   marginLeft: '0',
  // };

  // const height = {
  //   height: '100px',
  // };

  // const padding = {
  //   paddingTop: '4vw',
  // };

  const homeContainer = {
    height: '100%',
    marginLeft: '290px',
  };
  const border = {
    border: '1px solid #C4C4C4',
    width: '90vw',
    marginTop:'30px',
  };
  const setTabs = {
    display:'flex',
    margin: '30px 36px 30px 0',
    float:'right'
  };

  return (
    <div>

      <div style={homeContainer}>
        <h2>Welcome back <b>{user.firstName}</b></h2>
        <hr style={border} />

        <div>
          <div>
          {/* exp stuff */}
          </div>

          <div style={setTabs}>

            <div style={{marginRight:'150px'}}>
              <a href='/'>Recently Studied</a>
              <hr style={{border:'1px solid black', width: '125px'}} />
            </div>

            <div>
              <a href='/' style={{textDecoration:'none'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/android/24/000000/plus.png" />
                <b>&nbsp;&nbsp;&nbsp;Add Set</b>
              </a>
              <hr class='rainbow'></hr>
            </div>

          </div>
        </div>
        
        
        

      </div>

      {/* <Row>
        <Col>
        </Col>
        <Col style={welcome}>
          <h2>Welcome back <b>{user.firstName}</b></h2>
          <hr style={border} />
        </Col>
      </Row>
      <Row>
        <Col sm={8} />
        <Row>
          <Col >
            <a href='/' >
              Recently Studied
              <hr style={underline1} />
            </a>
          </Col>
        </Row>
        <Col />
        <Col>
          <a href='/add_sets'>
            <img src="https://img.icons8.com/android/24/000000/plus.png" />
              <strong>&nbsp;&nbsp;&nbsp;Add Set</strong>
              <hr style={underline2} />
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm={3} />
        <Col style={weekly}>
          Weekly Study Time: "A lot"
        </Col>
      </Row>
      <Row>
        <Col sm={3} />
        <Col style={padding}>
          Weekly exp growth:
        </Col>
      </Row> */}
    </div>

  );
}

export { Home };
