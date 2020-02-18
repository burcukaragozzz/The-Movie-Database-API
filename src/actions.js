import {
  GET_RESULTS_REQUESTED,
  GET_RESULTS_SUCCEEDED,
  GET_RESULTS_FAILED,
  GET_PAGE_NUMBER_DECREMENT,
  GET_PAGE_NUMBER_INCREMENT,
  GET_SEARCH_TEXT,
  GET_SEARCH_DATE,
  GET_SEARCH_VOTE,
} from './constants';

export const getResultsRequested = params => ({
    type: GET_RESULTS_REQUESTED,
    params,
  });
  
export const getResultsSucceeded = results => ({
  type: GET_RESULTS_SUCCEEDED,
  results,
});

export const getResultsFailed = reason => ({
  type: GET_RESULTS_FAILED,
  reason,
});

export const getPageNumberIncrement = () => ({
  type: GET_PAGE_NUMBER_INCREMENT,
});

export const getPageNumberDecrement = () => ({
  type: GET_PAGE_NUMBER_DECREMENT,
});

export const getSearchText = value => ({
  type: GET_SEARCH_TEXT,
  value
});

export const getSearchDate = value => ({
  type: GET_SEARCH_DATE,
  value
});

export const getSearchVote = value => ({
  type: GET_SEARCH_VOTE,
  value
});