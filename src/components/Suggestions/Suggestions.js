import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Suggestions.css';
class Suggestions extends Component {
  constructor(props){
    super(props);
    this.state={searchResults:[]}
  }

  componentWillReceiveProps(newProps){
    this.setState(()=>{
      searchResults:newProps.results
    })
  }

  render() {
    console.log('props inside suggs',this.props)
    var searchResultJSX= this.props.results.map((e)=>{
      return(
      <div className="divWrappingLink">
        <Link className="links" to={{pathname:"/movie_info",state: { element:{e}}}}>
          {e.title}<br />
        </Link>
      </div>
    );
    });
    return (
      <div className="Suggestions">
        <div className="centeredDiv">
          {
            searchResultJSX
          }
        </div>
      </div>
    );
  }
}

export default Suggestions;
