import React from 'react';
import './App.css';

class Movie extends React.Component {
  render() {
    return (
      <li className="movie-container">
        <div className="movie-poster">
          <img src={ this.props.url } alt=""/>
        </div>
        <div className="movie-tittle">
        </div>
      </li>
    );
  }; 
}

export default Movie;