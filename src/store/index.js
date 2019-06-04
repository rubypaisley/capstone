import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { moodObjReducer, moodArrReducer } from './mood';
import {
  userReducer,
  usersReducer,
  relatedReducer,
  userPollsReducer
} from './users';
import { eventReducer, assignedEventReducer } from './events';
import { choicesReducer, votesReducer } from './polls';

const reducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  related: relatedReducer,
  mood: moodObjReducer,
  moods: moodArrReducer,
  events: eventReducer,
  assignedEvents: assignedEventReducer,
  userPolls: userPollsReducer,
  choices: choicesReducer,
  votes: votesReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export { store };