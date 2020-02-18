import React from 'react';
import './App.css';

class Movie extends React.Component {
  render() {
    return (
      <li className="movie-container">
        <div className="movie-poster">
          <img src={'https://image.tmdb.org/t/p/w500/'+`${this.props.posterPath}`} alt=""/>
        </div>
        <div className="movie-title">
          <span>{this.props.title}</span>
        </div> 
      </li>
    );
  }; 
}

export default Movie;