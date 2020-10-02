import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Sets() {
    const user = accountService.userValue;
    
    const rainbow = {
      width: '150px',
      height: '2px',
      background: 'rgb(115,255,129)', /* Old browsers */
      background: '-moz-linear-gradient(left, rgba(115,255,129,1) 0%, rgba(115,255,248,1) 17%, rgba(176,115,255,1) 47%, rgba(255,115,115,1) 72%, rgba(255,182,115,1) 95%)', /* FF3.6-15 */
      background: '-webkit-linear-gradient(left, rgba(115,255,129,1) 0%,rgba(115,255,248,1) 17%,rgba(176,115,255,1) 47%,rgba(255,115,115,1) 72%,rgba(255,182,115,1) 95%)', /* Chrome10-25,Safari5.1-6 */
      background: 'linear-gradient(to right, rgba(115,255,129,1) 0%,rgba(115,255,248,1) 17%,rgba(176,115,255,1) 47%,rgba(255,115,115,1) 72%,rgba(255,182,115,1) 95%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#73ff81\', endColorstr=\'#ffb673\',GradientType=1 )', /* IE6-9 */
      borderRadius: '40px',
    };

    const dottedBorder = {
      width:'300px',
      height:'200px',
      border: '1.5px dashed #000000',
      borderRadius: '20px',
      marginLeft: '400px'
    };

    const welcome = {
      fontSize: '2vw',
      ///  paddingLeft: '50px',
        /// paddingBottom: '50px'
    }; 

    const weekly = {
      fontSize: '20px',
    };

    const border = {
        border: '1px solid #C4C4C4',
        width: '77vw',
  
    };
      
    const recent = {
      top: '10vw',
    };
   
    return (
      <div>
        <Row>
          <Col></Col>
          <Col style={welcome}>
            Sets
            <hr style={border} />
          </Col>
        </Row>
        <Col></Col>


        <div style={dottedBorder}>
          <div className="text" style={{textAlign: 'center', margin:'auto', padding: '80px 0'}}>
            <p>+ &nbsp;&nbsp;&nbsp; New Set</p>
            <div className="rainbow" style={{marginTop: '-10px'}}>
              <hr style={rainbow} ></hr>
            </div>
          </div>
        </div>

        
      </div>

    );
}

export { Sets };
