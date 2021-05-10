import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar';
import { RepositoryView } from '../Views/RepositoryView';
import { UserView } from '../Views/UserView';

export const AppRouter = () => {
    return (   
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/user" component={ UserView } />
                    <Route exact path="/repository" component={ RepositoryView } />
                    <Route exact path="/" component={ UserView } />
                </Switch>
            </div>
        </Router>
    )
}
