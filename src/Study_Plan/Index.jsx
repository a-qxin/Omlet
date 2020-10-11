import React from 'react';
import { accountService } from '@/_services';
// import { Container, Row, Col } from 'react-bootstrap';

function Study_Plan() {
  const user = accountService.userValue;

  const container = {
    height: '100%',
    margin: '70px 40px 0 290px',
  };

  const setTabs = {
    display: 'flex',
    margin: '30px 0px 30px 0',
    float: 'right'
  };

  const testName = {
    margin:'0'
  }

  return (
    <div>
        

      <div style={container}>
        <div style={{display:'flex',}}>
          <div style={{display:'flex', float:'left'}}>
            <img src='public/images/less.png' style={{height:'20px', width:'auto', margin:'20px 10px 0 0'}}/>
            &nbsp;&nbsp;
            <h1 style={{fontSize:'55px'}}><b>July</b></h1>
            <h3 style={{marginTop:'24px'}}>&nbsp;2020</h3>
            &nbsp;&nbsp;&nbsp;
            <img src='public/images/greater.png' style={{height:'20px', width:'auto', margin:'20px 10px 0 0'}}/>
          </div>

          <div style={{margin:'30px 0 0 250px'}}>
            <a href='/' style={{textDecoration:'none'}}>
              Export to Calendar&nbsp;&nbsp;
              <img src='public/images/download_icon.png' style={{width:'20px', paddingBottom:'5px'}}></img>
            </a>
            <hr style={{margin:'10px 0', width:'100%', border: '1px solid #c4c4c4',}}/>
          </div>
        </div>
        
        <div style={{ display: 'flex' }}>

          {/* calendar */}
          <div style={{width: '100%'}}>
            <div 
              style={{margin:'30px 50px 0 0', borderRadius:'36px', height:'500px', boxShadow:'1px 1px 10px rgba(0, 0, 0, 0.15)', }}
            >

            </div>
          </div>

          {/* test list */}
          <div>
            <div style={setTabs}>
              <div style={{ marginRight: '100px' }}>
                <a href='/' style={{marginLeft:'23px'}}>Upcoming</a>
                <hr style={{ border: '1px solid black', width: '125px' }} />
              </div>

              <div>
                <a href='/' style={{ textDecoration: 'none' }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                      <img src="https://img.icons8.com/android/24/000000/plus.png" />
                  &nbsp;&nbsp;&nbsp;New Test
                </a>
                <hr class='rainbow'></hr>
              </div>
            </div>

            {/* setlist */}
            <div>
              <h4><b>Defence Against the Dark Arts</b></h4>
              <p style={testName}>Exam 1</p>
              <p>10/10/20</p>
              <hr />
            </div>

            <div>
              <h4><b>Potions</b></h4>
              <p style={testName}>Quiz 2</p>
              <p>10/31/20</p>
              <hr />
            </div>

            <div>
              <h4><b>History of Magic</b></h4>
              <p style={testName}>Quiz 3</p>
              <p>11/02/20</p>
              <hr />
            </div>

            <div>
              <h4><b>Transfiguration</b></h4>
              <p style={testName}>Exam 2</p>
              <p>11/20/20</p>
              <hr />
            </div>

          </div>

        </div>

      </div>

      {/* <Row>
                <Col>
                </Col>
                 <Col style={welcome}>
                    Welcome back <b>{user.firstName}</b>                              
                    <hr style={border} />
                  </Col>
                </Row>
              <Row>
              <Col sm={8} />
              <Row>
              <Col > 
              <a href='/' >
                Upcoming
                <hr style={underline1}/>
              </a>
              </Col>
              </Row>
              <Col />
              <Col>
              <a href='/'>
              <img src="https://img.icons8.com/android/24/000000/plus.png"/>
               New Test
                <hr style={underline2}/>
              </a>
              </Col>
              </Row> */}




    </div>

  );
}

export { Study_Plan };
