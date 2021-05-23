import { combineReducers } from 'redux';

import userReducer from './userReducer';
import postReducer from './postsReducer';

const rootReducer = combineReducers({
    userState: userReducer,
    postState: postReducer,
});

export default rootReducer;