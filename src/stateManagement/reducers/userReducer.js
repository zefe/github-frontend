import { types } from '../types/githubTypes';

const initialState = {
    loading: false,
    data: {},
    errorMessage: ""
};

export const userReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.USER_DETAILS_LOADING:
                return {
                    ...state,
                    loading: true,
                    errorMessage: ""
                }
            case types.USER_DETAILS_FAIL:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "User not found"
                }
            case types.USER_DETAILS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "",
                    data: action.payload.userDetails,
                    userRepos: action.payload.userRepos
                }
                
        
            default:
                return state;
        }
};