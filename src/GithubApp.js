import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './stateManagement/store/store';

export const GithubApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
