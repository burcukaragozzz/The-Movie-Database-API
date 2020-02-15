import React from 'react';
import './App.css';
import NotFoundImage from './images/not-found.png';


class Movie extends React.Component {
  render() {
    return (
      <li className="movie-container">
        <div className="movie-poster">
          <img src={NotFoundImage} alt=""/>
        </div>
        <div className="movie-title">
          <span>{this.props.title}</span>
        </div> 
      </li>
    );
  }; 
}

export default Movie;