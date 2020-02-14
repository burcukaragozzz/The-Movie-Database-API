import { fromJS } from 'immutable';
import * as Status from './status';

import {
  GET_RESULTS_REQUESTED,
  GET_RESULTS_SUCCEEDED,
  GET_RESULTS_FAILED,
} from './constants';

export const initialState = fromJS({
  status: Status.INIT,
  reason: null,
  movies: [],
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
    default:
      return state;
  }
}

export default appReducer;
