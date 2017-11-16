import { combineReducers } from 'redux';
import tweets from './TweetsReducer';
import user from './UserReducer';
export default combineReducers({
    tweets, user
});