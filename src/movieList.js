import React from 'react';
import './App.css';
import Movie from './movie';


import { connect } from 'react-redux';

import {getResultsSucceeded, getResultsFailed, getResultsRequested} from './actions';

class MovieList extends React.Component {
  componentDidMount() {
    fetch('http://api.themoviedb.org/3/movie/top_rated?api_key=4719970efb7c7d95db53e03b34fdc3b3&page=345')
    .then(response => response.json())
    .then(responseData => {
      this.props.getResultsSucceeded(responseData);
    })
    .catch(error => {
      console.log(error);
    });  
  }

  render() {
    const { movies } = this.props;
    let movieList;
    if(movies){
      movieList = movies.map((movie, index) => <Movie url={movie.poster_path} key={index} />);
    }
    console.log(movies.results)                       
    return (
      <div className="movie-list-container">
        <ul className="movie-list">
          { movieList }
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  let movieList = state.toJS();
  return { movies: movieList.movies }
} 

const mapDispatchToProps = dispatch => ({
  getResultsSucceeded: results => {
    dispatch(getResultsSucceeded(results));
  }
});

export default connect(mapState, mapDispatchToProps)(MovieList)