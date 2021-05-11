import axios from 'axios';
import { types } from '../types/githubTypes';

const URL_API_USERS = 'https://api.github.com/users/';
const URL_API_REPOSITORIES = 'https://api.github.com/search/repositories?q=';

//Funtion to get user from gihub api 
export const getUser = (user) => {
    return async( dispatch ) => {
        try{

            dispatch({
                type: types.USER_DETAILS_LOADING
            });

            const res = await axios.get(`${URL_API_USERS}${user}`);

            const repos = await axios.get(`https://api.github.com/users/${user}/repos?per_page=5`);

            const userDetails = res.data;
            const userRepos = repos.data;

            dispatch({
                type: types.USER_DETAILS_SUCCESS,
                payload: { userDetails, userRepos },
            });


        }
        catch(e){
            dispatch({
                type: types.USER_DETAILS_FAIL
            });
            console.log(e);
        }

    }
}

//Funtion to get repositories from gihub api 
export const getRepositoryList = (repository) => {
    return async( dispatch ) => {
        try{

            dispatch({
                type: types.REPOSITORY_LIST_LOADING
            });

            const res = await axios.get(`${URL_API_REPOSITORIES}${repository}`);

            dispatch({
                type: types.REPOSITORY_LIST_SUCCESS,
                payload: res.data
            });


        }
        catch(e){
            dispatch({
                type: types.REPOSITORY_LIST_FAIL
            });
            console.log(e);
        }

    }
}