import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import { getSearchText, getResultsSucceeded, getSearchDate, getSearchVote } from './actions';

import { yearList, voteList } from './list';

class FilterList extends React.Component {
  handleChange = (event) => {
    const { getSearchText } = this.props;
    if(event.target.value){
      getSearchText(event.target.value)
    }
    else {
      getSearchText('all');
    }
  }

  handleDateChange = (event) => {
    const { getSearchDate } = this.props;
    getSearchDate(event.target.value)
  } 

  handleVoteChange = (event) => {
    const { getSearchVote } = this.props;
    getSearchVote(event.target.value)
  } 

  performSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4719970efb7c7d95db53e03b34fdc3b3&query=${this.props.searchText}&primary_release_year=${this.props.date}&vote_average.gte=${this.props.vote}`)
      .then(response => response.json())
      .then(responseData => {
        this.props.getResultsSucceeded(responseData);
      })
      .catch(error => {
        console.log(error);
        console.log("deneme");
    });
  }

  render() {
    let YearMenu = yearList.map((year) =>
      <div className="year-menu" key={year}>
        <input 
          type="radio" 
          name="movie-year" 
          onChange={e => this.handleDateChange(e)}
          value={year}
        />
        <span className="year-text">{year}</span>
      </div>
    )

    let VoteList = voteList.map((vote) =>
    <div className="vote-menu" key={vote}>
      <input 
        type="radio" 
        name="vote-average" 
        onChange={e => this.handleVoteChange(e)}
        value={vote}
      />
      <span className="vote-text">{vote}</span>
    </div>
  )
                           
    return (
      <div className="filter-list-container">
        <div className="movie-name-container">
          <div className="movie-filter-title">
            Movie Name
          </div>
          <input 
            type="text" 
            name="movieName"  
            onChange={e => this.handleChange(e)}
          />
        </div>
        <div className="movie-year-container">
          <div className="movie-filter-title">
            Movie Year
          </div>
          <div className="input-wrapper">
            {YearMenu}
          </div>
        </div>
        <div className="movie-vote-container">
          <div className="movie-filter-title">
            Movie IMDB
          </div>
          <div className="input-wrapper">
            {VoteList}
          </div>
        </div>
        <button 
          type="button"             
          onClick={() => this.performSearch()} 
          className="filter-button">FİLTRELE</button>
      </div>
    );
  }
}

const mapState = state => {
  let stateObj = state.toJS();
  return {
    searchText: stateObj.searchText,
    date: stateObj.date,
    vote: stateObj.vote,
  }
} 

const mapDispatchToProps = dispatch => ({
  getSearchText: value => {
    dispatch(getSearchText(value));
  },
  getSearchDate: value => {
    dispatch(getSearchDate(value));
  },
  getSearchVote: value => {
    dispatch(getSearchVote(value));
  },
  getResultsSucceeded: results => {
    dispatch(getResultsSucceeded(results));
  },
});

export default connect(mapState, mapDispatchToProps)(FilterList)