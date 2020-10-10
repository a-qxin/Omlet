import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Searchbar } from '@/_components';
import { Container, Row, Col } from 'react-bootstrap';

import { accountService } from '@/_services';

const omlet = {
  color: 'black',
  fontSize: '40px',
};

// const welcome = {
//   fontSize: '2vw',
//   top: '50px',
// };
const navlinks = {
  color: 'black'
};

function Nav() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  // only show nav when logged in
  if (!user) return null;

  return (
    <div>
      <nav className="navbar navbar-expand vertical-nav">
        <Row style={{ height: "100%" }}>
          <Col>
            <NavLink exact to="/" className="nav-item nav-link" style={omlet}>
              <img src='public/images/omlet-logo.png' style={{ width: "80px" }} />
            </NavLink>
            <NavLink exact to="/" className="nav-item nav-link" style={navlinks}>
              {/* <img src='public/images/dash_icon.svg'></img> */}
                Dashboard
            </NavLink>
            <NavLink exact to="/sets" className="nav-item nav-link" style={navlinks}>
              {/* <img src='public/images/sets_icon.svg'></img> */}
                Sets
            </NavLink>
            <NavLink exact to="/study_plan" className="nav-item nav-link" style={navlinks}>
              {/* <img src='public/images/plan_icon.svg'></img> */}
              Study Plan
            </NavLink>
            <NavLink exact to="/metrics" className="nav-item nav-link" style={navlinks}>
              {/* <img src='public/images/metric_icon.svg'></img> */}
              Metrics
            </NavLink>
            <a onClick={accountService.logout} className="nav-item nav-link" >Logout</a>
          </Col>
        </Row>
      </nav>

      <div style={{ margin: '0 0 30px 270px', padding: '0 0 18px 0', display:'flex', boxShadow: '0 5px 3px -4px #c4c4c4' }}>
        <div style={{width:'100%', padding:'40px 0 0 100px'}}>
          <Searchbar />
        </div>
        <div>
          <NavLink to="/profile" className="nav-item nav-link pt-4" >
            <img src='public/images/omlet-mascot.png' style={{ width: "42px", float: 'right', margin:'0 16px 8px 0' }}/>
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
