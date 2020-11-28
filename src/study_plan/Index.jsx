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
    float: 'right'
  };

  const accentGreen = {
    width: '3px',
    height:'auto',
    margin: '5px 10px 10px 0px',
    background: '#2ee340'
  };
  const accentRed = {
    width: '3px',
    height:'auto',
    margin: '5px 10px 10px 0px',
    background: '#ff6767'
  };
  const accentBlue = {
    width: '3px',
    height:'auto',
    margin: '5px 10px 10px 0px',
    background: '#00cabe'
  };
  const accentPurple = {
    width: '3px',
    height:'auto',
    margin: '5px 10px 10px 0px',
    background: '#B073ff'
  };

  const testSpacing = {
    margin:'2px 0'
  };
  const testHr = {
    margin:'2px 0 4px',
  }

  return (
    <div>
        
      <div style={container}>
        <div style={{display:'flex',}}>
          <div style={{display:'flex', float:'left'}}>
            <a href='/'>
              <img src='public/images/less.png' style={{height:'20px', width:'auto', margin:'20px 10px 0 0'}}/>
            </a>
            &nbsp;&nbsp;
            <h1 style={{fontSize:'55px'}}><b>July</b></h1>
            <h3 style={{marginTop:'24px'}}>&nbsp;2020</h3>
            &nbsp;&nbsp;&nbsp;
            <a href='/'>
              <img src='public/images/greater.png' style={{height:'20px', width:'auto', margin:'20px 10px 0 0'}}/>
            </a>
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
                <a href='/' style={{marginLeft:'23px', textDecoration:'none'}}>Upcoming</a>
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

            {/* test list */}
            <div>
              
              <div style={{display:'flex', width: '100%'}}>
                <div style={accentGreen}></div>
                <div style={{marginTop:'10px'}}>
                  <h4 style={testSpacing}><b>DADA - 101</b></h4>
                  <p style={testSpacing}>Exam 1</p>
                  <p>10/10/20</p>
                </div>
              </div>
              <hr style={testHr}/>

              <div style={{display:'flex', width: '100%'}}>
                <div style={accentPurple}></div>
                <div style={{marginTop:'10px'}}>
                  <h4 style={testSpacing}><b>PTNS - 101</b></h4>
                  <p style={testSpacing}>Exam 1</p>
                  <p>10/31/20</p>
                </div>
              </div>
              <hr style={testHr}/>

              <div style={{display:'flex', width: '100%'}}>
                <div style={accentBlue}></div>
                <div style={{marginTop:'10px'}}>
                  <h4 style={testSpacing}><b>HOM - 101</b></h4>
                  <p style={testSpacing}>Exam 1</p>
                  <p>11/02/20</p>
                </div>
              </div>
              <hr style={testHr}/>

              <div style={{display:'flex', width: '100%'}}>
                <div style={accentRed}></div>
                <div style={{marginTop:'10px'}}>
                  <h4 style={testSpacing}><b>TNFG - 101</b></h4>
                  <p style={testSpacing}>Exam 1</p>
                  <p>11/13/20</p>
                </div>
              </div>
              <hr style={testHr}/>

            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export { Study_Plan };
