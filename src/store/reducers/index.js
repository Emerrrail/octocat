import { combineReducers } from 'redux';
import { getRepos } from './getRepos';
import { getARepo } from './getARepo';

export default combineReducers({
    getRepos,
    getARepo
});