import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Searchbar } from '@/_components';
import { Row, Col } from 'react-bootstrap';

import { accountService } from '@/_services';

const logo = {
  margin: '30px 0 70px 5px'
};
const circle = {
  margin: '0 auto',
  height: '60px',
  width: '60px',
  borderRadius:'100%',
  background:'white',
  boxShadow: '0px 0px 5px rgba(0,0,0,0.6)',
  // -moz-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  // -webkit-box-shadow: 10px -10px  rgba(0,0,0,0.6);
  // -o-box-shadow: 10px -10px  rgba(0,0,0,0.6);
};
const navlinks = {
  color: 'black',
  fontSize:'13px',
};
const navIcons = {
  width: '42px', 
  height:'auto',
  margin:'15px 9px',
};
const navText = {
  margin: '12px 0 0 0',
};

function Nav() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  if (!user) return null;

  return (
    <div>
      <nav className="navbar navbar-expand vertical-nav" >
        <Row style={{ height: "100%", textAlign:'center' }}>
          <Col>

            <NavLink exact to="/" className="nav-item nav-link" style={logo}>
              <img src='public/images/omlet-logo.png' style={{ width: "80px" }} />
            </NavLink>

            <NavLink exact to="/" className="nav-item nav-link" style={navlinks}>
              <div style={circle}>
                <img src='public/images/dash_icon.svg' style={navIcons} ></img>
              </div>
              <p style={navText}>Dashboard</p>
            </NavLink>

            <NavLink exact to="/sets" className="nav-item nav-link" style={navlinks}>
              <div style={circle}>
                <img src='public/images/sets_icon.svg' style={navIcons} ></img>
              </div>
              <p style={navText}>Sets</p>
            </NavLink>

            <NavLink exact to="/study_plan" className="nav-item nav-link" style={navlinks}>
              <div style={circle}>
                <img src='public/images/plan_icon.svg' style={{width: '30px', margin:'12px 10px',}} ></img>
              </div>
              <p style={navText}>Study Plan</p>
            </NavLink>

            <NavLink exact to="/metrics" className="nav-item nav-link" style={navlinks}>
              <div style={circle}>
                <img src='public/images/metric_icon.svg' style={navIcons} ></img>
              </div>
              <p style={navText}>Metrics</p>
            </NavLink>

            <a onClick={accountService.logout} className="nav-item nav-link" style={{position:'absolute', bottom:'0', marginLeft:'20px', fontSize: '14px'}} >Logout</a>

          </Col>
        </Row>
      </nav>

      <div style={{ margin: '0 0 30px 158px', padding: '0 0 20px 0', display:'flex', boxShadow: '0 5px 3px -4px #c4c4c4' }}>
        <div style={{width:'100%', padding:'40px 0 0 140px'}}>
          <Searchbar />
        </div>
        <div>
          <NavLink to="/profile" className="nav-item nav-link pt-4" >
            <img src='public/images/omlet-mascot.png' style={{ width: "42px", float: 'right', margin:'0 16px 0px 0' }}/>
          </NavLink>
        </div>
      </div>

      {/* {user.role === Role.Admin &&
            <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
        }
        <Route path="/admin" component={AdminNav} /> */}
    </div>
  );
}

// function AdminNav({ match }) {
//     const { path } = match;

//     return (
//         <nav className="admin-nav navbar navbar-expand navbar-light">
//             <div className="navbar-nav">
//                 <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
//             </div>
//         </nav>
//     );
// }

export { Nav }; 
