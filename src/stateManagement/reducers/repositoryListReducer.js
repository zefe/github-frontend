import { types } from '../types/githubTypes';

const initialState = {
    loading: false,
    data: {},
    errorMessage: ""
};

export const repositoryListReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.REPOSITORY_LIST_LOADING:
                return {
                    ...state,
                    loading: true,
                    errorMessage: ""
                }
            case types.REPOSITORY_LIST_FAIL:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "Repository not found"
                }
            case types.REPOSITORY_LIST_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "",
                    data: action.payload
                }
                
        
            default:
                return state;
        }
};