import { combineReducers } from 'redux';
import { getRepos } from './getRepos';
import { getFollowers } from './getFollowers';
import { getARepo } from './getARepo';
import { getOwnerData } from './getOwnerData';

export default combineReducers({
    getRepos,
    getFollowers,
    getARepo,
    getOwnerData
});