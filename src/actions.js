import {
  GET_RESULTS_REQUESTED,
  GET_RESULTS_SUCCEEDED,
  GET_RESULTS_FAILED,
  GET_PAGE_NUMBER_DECREMENT,
  GET_PAGE_NUMBER_INCREMENT,
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
