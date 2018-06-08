import React, { Component } from 'react';
import './RouteTwo.css';

class RouteTwo extends Component {
  render() {
    return (
      <div className="RouteTwo">
        <h1>RouteTwo</h1>
        <h4>{this.props.children}</h4>

      </div>
    );
  }
}

export default RouteTwo;
