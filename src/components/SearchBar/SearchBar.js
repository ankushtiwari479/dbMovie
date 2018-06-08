import React, { Component } from 'react';
import { Switch, Route ,Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import {Navbar ,NavItem,MenuItem,NavDropdown,Nav} from 'react-bootstrap';

import './SearchBar.css';
class SearchBar extends Component {
  constructor(props){
      super(props);
      this.state={
        url:''
      }
  }

  handleBlur=()=>{
    // this.props.onSearchBarBlur();
  }

  handleFocus=()=>{
    this.props.onSearchBarFocus();
  }

  handleClickPress=(event)=>{
    var inp = String.fromCharCode(event.charCode);
    var currentResult ;
    var keycode ;
    this.setState({url: event.target.value});
    // console.log(event.charCode);
    // if (event.charCode >= 97 && event.charCode <= 122){
    //   console.log('you just pressed :'+event.key);
    //   keycode = event.key;
    //   this.setState(()=>{
    //     return{
    //       url:(this.state.url+keycode)
    //     }
    //   })
      console.log(this.state.url)
      fetch('https://api.themoviedb.org/3/search/movie?api_key=0e44f3f47fe9896c30b4c57f7d2a6941&query='+this.state.url).then(results=>{
          return results.json();
        }).then(data=>{
          currentResult=data.results;
          console.log("currentResult",currentResult)
          this.props.onSearchResult(currentResult)
        })
    // }
    // https://api.themoviedb.org/3/search/movie?api_key=###&query=tron
  }
  render() {
    console.log('render',this.state)
    return (
    <div className="SearchBar">
      <input type="text" className="inputField" value={this.state.url} onChange={this.handleClickPress} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
    </div>
    );
  }
}

export default SearchBar;
