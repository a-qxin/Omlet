import React from 'react';
import { accountService } from '@/_services';
// import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';


function Metrics() {
  const user = accountService.userValue;

  const tests = [
    { value: 'Biology', label: 'biology' },
    { value: 'math', label: 'math' },
  ];

  const homeContainer = {
    height: '100%',
    margin: '80px 40px 0 290px',
  };
  const border = {
    border: '1px solid #C4C4C4',
    width: '100%',
    marginTop: '30px',
    marginRight: '36px',
  };

  const centerStats = {
    textAlign:'center',
  };
  const statsSpace = {
    padding: '20px'
  };
  
  // const setTabs = {
  //   display: 'flex',
  //   margin: '30px 0px 30px 200px',
  //   // float: 'right'
  // };

  // const welcome = {
  //   fontSize: '2vw',
  //   ///  paddingLeft: '50px',
  //   /// paddingBottom: '50px'
  // };
  // const weekly = {
  //   fontSize: '20px',
  // };
  // const border = {
  //   border: '1px solid #C4C4C4',
  //   width: '77vw',

  // };

  const recent = {
    top: '10vw',
  };
  /* const logo = {
      position: 'relative',
      right: '-1500px',
      bottom: '470px'

  }; */

  /// Code returned when user reaches home page
  return (
    <div style={homeContainer}>
      <div style={{ display: 'flex' }}>
        <div>

          {/* dropdown  */}
          <div style={{ width: '220px', margin: '0 0 70px 0' }} >
            <Select
              options={tests}
              // className="mb-3"
              placeholder="Subject"
              isSearchable
              style={{ width: '250px', }}
            />
          </div>

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

        {/* right metrics card */}
        <div style={{ margin: '0 0 0 200px', boxShadow:'2px 2px 5px grey', minWidth: '550px', borderRadius: '20px', padding:'40px 30px' }}>
          <div style={{}}>
            <div style={{ display: 'flex', justifyContent:'space-evenly', verticalAlign:'bottom', alignItems: 'center' }}>
              <div><h4 style={{margin:'0 30px 0 0', fontWeight:'800'}}>Cell Types</h4></div>
              <div><button id="yellowButton" style={{paddingRight:'40px', paddingLeft:'40px'}}>Plan</button></div>

              {/* <button 
                                id="yellowButton" 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="btn"
                            >
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1" />}
                                Login
                            </button> */}
              <div><button id="yellowBorderButton">Study Set</button></div>
            </div>

            {/* metrics wheel */}
            <div style={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
              <div>
                <pie className="twentyfive"></pie>
              </div>
            </div>

            {/* xp, score, time info */}
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
              <div style={centerStats}>
                <div style={statsSpace}><h5>EXP</h5></div>
                <div> 460 | 1200 </div>             
              </div>
              <div style={centerStats}>
                <div style={statsSpace}><h5>AVG Score</h5></div>
                <div>0%</div>
              </div>
              <div style={centerStats}>
                <div style={statsSpace}><h5>Time Left</h5></div>
                <div>6 Hours</div>
              </div>
            </div>

            <div style={{display:'flex', justifyContent:'center', paddingTop:'60px'}}>
              <div style={{padding:'0 20px 0 0'}}>See Terms Rate</div>
              <div>
                <img src='src/images/down.svg' style={{width:'20px'}} ></img>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

  );
}

export { Metrics };
