import { combineReducers } from 'redux';
import { repositoryListReducer } from './repositoryListReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    RepositoryList: repositoryListReducer,
    User: userReducer
})
