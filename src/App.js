import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import HomeComponent from './components/HomeComponent/HomeComponent'
import ShowMovieInfoComponent from './components/ShowMovieInfoComponent/ShowMovieInfoComponent'
import { Switch, Route ,Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar'

import Suggestions from './components/Suggestions/Suggestions'
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
      <Provider store={store}>
          <div className="App" >
            <NavBar />
            <SearchBar onSearchResult={data=>this.handleSearchResult(data)} onSearchBarBlur={this.handleOnSearchBarBlur} onSearchBarFocus={this.handleOnSearchBarFocus} />
            <br/>
            {
              this.state.hideSearch!==true?(<Suggestions results={this.state.data}/>):''
            }
            <Switch>
              <Route exact path='/' component={HomeComponent}>
              </Route>
              <Route path='/movie_info' component={ShowMovieInfoComponent}>
              </Route>
            </Switch>
          </div>
      </Provider>
    );
  }
}

export default App;
