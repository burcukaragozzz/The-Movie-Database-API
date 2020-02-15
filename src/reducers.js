import { fromJS } from 'immutable';
import * as Status from './status';

import {
  GET_RESULTS_REQUESTED,
  GET_RESULTS_SUCCEEDED,
  GET_RESULTS_FAILED,
  GET_PAGE_NUMBER_DECREMENT,
  GET_PAGE_NUMBER_INCREMENT,
} from './constants';

export const initialState = fromJS({
  status: Status.INIT,
  reason: null,
  movies: [],
  page: 1
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESULTS_REQUESTED:
      return state.set('status', Status.LOADING);
    case GET_RESULTS_SUCCEEDED:
      return state
      .set('movies', action.results.results)
      .set('status', Status.LOADED)
    case GET_RESULTS_FAILED:
      return state
      .set('reason', action.reason)
      .set('status', Status.FAILED)
    case GET_PAGE_NUMBER_INCREMENT:
      return state
      .set('page', state.toJS().page + 1)
    case GET_PAGE_NUMBER_DECREMENT:
      return state
      .set('page', state.toJS().page - 1)
    default:
      return state;
  }
}

export default appReducer;
