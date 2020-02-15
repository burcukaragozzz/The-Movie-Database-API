import React from 'react';
import './App.css';
import Movie from './movie';
import RightArrow from './images/right-arrow.png';
import LeftArrow from './images/left-arrow.png';


import { connect } from 'react-redux';

import {
  getResultsSucceeded, 
  getResultsFailed, 
  getResultsRequested,
  getPageNumberIncrement,
  getPageNumberDecrement,
} from './actions';

class MovieList extends React.Component {

  componentDidMount = () => {
    this.setCurrentPage();
  }

  componentDidUpdate = () => {
    this.setCurrentPage();
  }

  setCurrentPage = () => {
    fetch('http://api.themoviedb.org/3/movie/top_rated?api_key=4719970efb7c7d95db53e03b34fdc3b3&'+`page=${this.props.page}`)
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
      movieList = movies.map((movie, index) => <Movie title={movie.title} key={index} />);
    }

    return (
      <div className="movie-list-container">
        <ul className="movie-list">
          { movieList }
        </ul>
        <div className="pagination-container">
          <button className="arrow-icon" onClick={this.props.getPageNumberDecrement}>
            <img src={LeftArrow} alt="left-arrow-icon" />
          </button>
          <div className="page-number">
            <input type="number" name="movieName" value={this.props.page}/>
          </div>
          <button className="arrow-icon" onClick={this.props.getPageNumberIncrement}>
            <img src={RightArrow} alt="right-arrow-icon" />
          </button>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  let stateObj = state.toJS();
  return { movies: stateObj.movies, page: stateObj.page }
} 




const mapDispatchToProps = dispatch => ({
  getResultsSucceeded: results => {
    dispatch(getResultsSucceeded(results));
  },
  getPageNumberIncrement: () => {
    dispatch(getPageNumberIncrement());
  },
  getPageNumberDecrement: () => {
    dispatch(getPageNumberDecrement());
  },
});

export default connect(mapState, mapDispatchToProps)(MovieList)