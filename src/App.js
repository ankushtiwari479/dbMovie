import React, { Component } from 'react';
import './App.css';
import RouteOne from './RouteOne/RouteOne'
import RouteTwo from './RouteTwo/RouteTwo'
import RouteThree from './RouteThree/RouteThree'
import { Switch, Route ,Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import SearchBar from './SearchBar/SearchBar'
import Suggestions from './Suggestions/Suggestions'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      hideSearch:false
    }
  }
  handleSearchResult=(data)=>{
    var searchedData =(data===undefined?[]:data);
    this.setState(()=>{
      return {
        data:searchedData
      }
    })
  }
  handleOnSearchBarBlur=()=>{
    this.setState(()=>{
      return{
        hideSearch:true
      }
    })
    console.log('blur called');
  }
  handleOnSearchBarFocus=()=>{
    this.setState(()=>{
      return{
        hideSearch:false
      }
    })
    console.log('blur called');
  }
  render() {
    console.log(this.state);
    return (
      <div className="App" >
        <NavBar />
        <SearchBar onSearchResult={data=>this.handleSearchResult(data)} onSearchBarBlur={this.handleOnSearchBarBlur} onSearchBarFocus={this.handleOnSearchBarFocus} />
        <br/>
        {
          this.state.hideSearch!==true?(<Suggestions results={this.state.data}/>):''
        }
        <Switch>
          <Route exact path='/' component={RouteOne}>
          </Route>
          <Route path='/RouteThree' component={RouteThree}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;