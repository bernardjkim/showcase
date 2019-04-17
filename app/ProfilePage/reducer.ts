/*
 *
 * ProfilePage reducer
 *
 */

import { ProfileActionTypes, ProfileState } from './types';

export const initialState: ProfileState = {
  loading: false,
  error: undefined,
};

function profilePageReducer(state: ProfileState = initialState, action: ProfileActionTypes) {
  return state;
  // switch (action.type) {
  //   default:
  //     return state;
  // }
}

export default profilePageReducer;
