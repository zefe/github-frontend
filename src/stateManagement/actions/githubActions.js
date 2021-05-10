import axios from 'axios';
import { types } from '../types/githubTypes';

const URL_API_USERS = 'https://api.github.com/users/';
const URL_API_REPO = 'https://api.github.com/users/';

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