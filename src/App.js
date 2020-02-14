import React from 'react';

import './App.css';
import MovieList from './movieList';
import FilterList from './filterList';

class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <FilterList />
        <MovieList />
      </div>
    );
  }
}

export default App;
