import React from 'react';
import { accountService } from '@/_services';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Add_Sets() {
    const user = accountService.userValue;
    
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
                <Col>
                </Col>
                 <Col style={welcome}>
                  Add Set Page                  
                <hr style={border} />
                  </Col>
                </Row>
              <Row>
              <Col>
              </Col>
              <Row> </Row>
              <Row>
              <Col> 
              </Col>
              </Row>
              <Col>
              <Card style={{ width: '40rem' }}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                  <form class="form-inline">
                    <div class="form-group">
                        <input placeholder="Term"
                            type="text" style={{outline: '0', marginRight: '3rem'}} />
                    </div>        
                    <div class="form-group" >
                        <input placeholder="Definition"
                            type="text" style={{outline: '0'}} />
                    </div>
                  </form>
                  </Card.Text>
                  
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/windows/32/000000/play.png"/></Button>
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/small/16/000000/delete.png"/></Button>
                  <Button variant="link" style={{float: "right"}}><img src="https://img.icons8.com/small/16/000000/resize-vertical.png"/></Button>
                </Card.Body>
              </Card></Col>
              <Col>
              </Col>
              </Row>
        </div>

    );
}

export { Add_Sets };
