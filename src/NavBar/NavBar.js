import React, { Component } from 'react';
import { Switch, Route ,Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import {Navbar ,NavItem,MenuItem,NavDropdown,Nav} from 'react-bootstrap';

import './NavBar.css';
class NavBar extends Component {
  render() {
    return (
    <div>
    <ul className="navbar">
      <Link to="/" className='navbarLink'><span>Explore Movies</span></Link>
      {// <Link to="/RouteTwo" className='navbarLink'><span>default</span></Link>
      // <Link to="/RouteThree" className='navbarLink'><span>default</span></Link>
    }
    </ul>
    </div>
    );
  }
}

export default NavBar;
