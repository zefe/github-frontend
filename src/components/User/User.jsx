import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../../stateManagement/actions/githubActions';
import { useForm } from '../../Hooks/useForm';
import { Empty } from '../Common/Empty';
import { EmptyNotFound } from '../Common/EmptyNotFound';
import { Search } from '../Common/Search';
import { ReactComponent as IconRepo }  from '../../assets/icons/repo.svg';
import { ReactComponent as Iconfollowing } from '../../assets/icons/following.svg';
import { ReactComponent as Iconfollowers } from '../../assets/icons/followers.svg';
import { ReactComponent as IconGists } from '../../assets/icons/gists.svg';
import { UserRepositoryList } from './UserRepositoryList';
import { Spinner } from '../Common/Spinner';
import '../../assets/styles/components/user/user.css';


export const User = () => {

    const dispatch = useDispatch();

    const userState = useSelector(state => state.User);
    const {
        public_repos,
        followers,
        following,
        login,
        name,
        location,
        html_url,
        avatar_url,
        public_gists
    } = userState.data;

    
    const PLACE_HOLDER = 'Search by user';

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch( getUser(searchText) );
    }

    const showData = () => {        
        
        if(userState.loading){
            return  (
                <div className="container-spinner">
                    <Spinner />
                </div>
            )
        }

        if(userState.errorMessage !== '') {
            return (
                <div className="user-not-found">
                    <h3>{userState.errorMessage}</h3>
                    <EmptyNotFound />
                </div>
            )
        }

        if(Object.entries(userState.data).length !== 0) {
            return (
                <div className="user-container">
                    <div className="user-cards">
                        <div className="card-single">
                            <span>                      
                                <IconRepo />
                            </span>   
                            <div className="card-body">
                                <small>Repositories</small>
                                <h1>{ public_repos }</h1>
                            </div>                            
                        </div>
                        <div className="card-single">
                            <span>
                                <Iconfollowers />
                            </span>
                            <div className="card-body">
                                <small>Followers</small>
                                <h1>{ followers }</h1>
                            </div>      
                        </div>
                        <div className="card-single">
                            <span>
                                <Iconfollowing />
                            </span>    
                            <div className="card-body">
                                <small>Following</small>
                                <h1>{  following }</h1>
                            </div>      
                        </div>
                        <div className="card-single">
                            <span>
                                <IconGists />
                            </span>     
                            <div className="card-body">
                                <small>Gists</small>
                                <h1>{ public_gists  }</h1>
                            </div>      
                        </div>

                    </div>
                    <div className="user-details">
                        <div className="user-details-card">
                            <h4>Repositories</h4>
                            <div className="avatar">
                                <img src={ avatar_url } />                                
                            </div>
                            <div className="user-name">
                                <span>{ name }</span>
                                <span>{ login }</span>
                            </div>
                            <div className="user-info">
                                {
                                    location && 
                                    <div className="item-info">
                                        <span className="ti-location-pin"></span>
                                        <span>{ location }</span>
                                    </div>

                                }
                                {
                                   html_url && 
                                   <div className="item-info">
                                       <span className="ti-link"></span>
                                       <span>{html_url}</span>
                                   </div>
                                }
                            </div>
                        </div>
                        <div className="user-repositories-list d-none d-sm-block">
                            <h4>Repositories</h4>
                            <UserRepositoryList />

                        </div>                  
                    </div>
                </div>
            )
        }


        return ( <Empty /> )        
    }; 

    return (
        <div>
            <Search 
                searchText={ searchText }
                handleSearch={ handleSearch }
                handleInputChange= { handleInputChange }
                placeholder={ PLACE_HOLDER }
            />
            { showData() }
        </div>
    )
}