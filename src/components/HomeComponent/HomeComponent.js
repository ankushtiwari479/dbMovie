import React, { Component } from 'react';
import { Switch, Route ,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPopularMovies} from '../../actions/movieActions'
// import 'bootstrap/dist/css/bootstrap.css';
// import {Navbar ,NavItem,MenuItem,NavDropdown,Nav} from 'react-bootstrap';
import ShowMovieInfoComponent from '../ShowMovieInfoComponent/ShowMovieInfoComponent'
import './HomeComponent.css';
class HomeComponent extends Component {
  constructor(props){
    super(props);
    this.arr=[];
    this.state={arrOfMovies:[]}
  }

    componentWillMount(){
      this.props.fetchPopularMovies();
    }
    componentWillUpdate(){
      // this.returningElemets();

    }

    defaultMovieClicked=(e)=>{
      console.log(e.target.value);
    }

  render() {
    const sampleMovies = this.state.arrOfMovies;
    console.log('render' ,this.state);
    const sampleMoviesJSX = this.props.movies.map((e,index)=>{
      return (

      <Link to={{pathname:"/movie_info",state: { element:{e}}}}
        className='defaultMovies' key={index}>
        Title : {e.title}<br />
        popularity :{e.popularity}<br />
        Release Date :{e.release_date}<br />
        Vote Average :{e.vote_average}<br />
        <br/>
        <img src={"http://image.tmdb.org/t/p/w400//"+e.poster_path}/>
        <br/>
      </Link >)
    });
    return (
    <div className="RouteOneMainDiv">
    <p style={{fontSize:"35px"}}>Top trending peoples choice</p>
    <div>
    {sampleMoviesJSX}
    </div>
    </div>
    );
  }
}

const mapStateToProps = state=>({
  movies:state.movies.items,
});


export default connect(mapStateToProps,{fetchPopularMovies})(HomeComponent) ;
