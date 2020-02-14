import {
  GET_RESULTS_REQUESTED,
  GET_RESULTS_SUCCEEDED,
  GET_RESULTS_FAILED,
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