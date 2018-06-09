import {FETCH_POPULAR_MOVIES,SET_CURRENT_ITEM,FETCH_MOVIES_MATCHED} from './types';


export function fetchPopularMovies(){
  return function(dispatch){
    const url='https://api.themoviedb.org/3/movie/popular?api_key=0e44f3f47fe9896c30b4c57f7d2a6941';
    var popularResult ;
    fetch(url).then(results=>{
      return results.json();
    }).then(movies=>dispatch({
      type:FETCH_POPULAR_MOVIES,
      payload:movies.results
    }));
  }
}

export function currentItemSelected(){
  
}

export function fetchSearchedMovies(){

}
