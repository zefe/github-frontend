import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


export const Navbar = () => {
    return (        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between" >
            <Link
                className="navbar-brand"
                to="/user"
            >
                <img src={ logo } alt="Github search engine" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav mr-auto">
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/user"
                        >
                            User
                        </NavLink >                        
                        <NavLink
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/repository"
                        >
                            Repository
                        </NavLink >
                </div>
            </div>
        </nav>
    
    )
}
