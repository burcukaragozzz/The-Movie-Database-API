import React from 'react';
import './App.css';


class FilterList extends React.Component {
  render() {
                           
    return (
      <div className="filter-list-container">
        <div className="movie-name-container">
          <div className="movie-name-title">
            Movie Name
          </div>
          <input type="text" name="movieName" />
        </div>
      </div>
    );
  }
}

export default FilterList;