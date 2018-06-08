import React, { Component } from 'react';
import './RouteThree.css';

class RouteThree extends Component {
  constructor(props){
    super(props);
    console.log('ID IS :',props.location.state);
  }
  render() {
    return (
      <div className="RouteThree">

        <h1>{this.props.location.state.element.e.title}</h1>
        <img src={"http://image.tmdb.org/t/p/w400//"+this.props.location.state.element.e.poster_path}/>
        <h4>{this.props.location.state.element.e.overview}</h4>
        <h4>Popularity among peoples :{this.props.location.state.element.e.popularity}</h4>
        <h4>{"Date of Release"} :{this.props.location.state.element.e.release_date}</h4>
        <h4>{"Average rating"} :{this.props.location.state.element.e.vote_average}</h4>
        <h4>{"Votes Recieved"} :{this.props.location.state.element.e.vote_count}</h4>

      </div>
    );
  }
}

export default RouteThree;
