import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PageNotFound from '../components/Common/PageNotFound';
import { Navbar } from '../components/Navbar/Navbar';
import { RepositoryView } from '../Views/RepositoryView';
import { UserView } from '../Views/UserView';

export const AppRouter = () => {
    return (   
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ UserView } />
                    <Route exact path="/repository" component={ RepositoryView } />
                    <Route component={ PageNotFound } />
                </Switch>
            </div>
        </Router>
    )
}
