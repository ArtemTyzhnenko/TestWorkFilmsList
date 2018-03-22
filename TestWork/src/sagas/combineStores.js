import { combineReducers } from 'redux';

import films from './Films/reducerFilms';
import comments from '../modules/Comments/reduserComments'

export default combineReducers({films,comments});