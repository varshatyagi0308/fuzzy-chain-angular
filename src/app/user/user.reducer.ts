import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from './user.actions';
import { initialState } from './state.model';

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);
