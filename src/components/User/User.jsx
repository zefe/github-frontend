import React, { useState } from 'react';

import { useForm } from '../../Hooks/useForm';
import { Empty } from '../Common/Empty';
import { Search } from '../Common/Search';
import avatar from '../../assets/images/avatar.png';

import { UserRepositoryList } from './UserRepositoryList';
import '../../assets/styles/components/user/user.css';


export const User = () => {
    
    const [user, setUser] = useState('')
    const PLACE_HOLDER = 'Search by user';

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Get user details")
        setUser('Zeferino')
    }

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;


    return (
        <div>
            <Search 
                searchText={ searchText }
                handleSearch={ handleSearch }
                handleInputChange= { handleInputChange }
                placeholder={ PLACE_HOLDER }
            />
            {
                user ? 
                <div className="user-container">
                    <div className="user-cards">
                        <div class="card-single">                                            
                            <span class="ti-bookmark-alt"></span>      
                            <div className="card-body">
                                <small>Repositories</small>
                                <h1>54545</h1>
                            </div>                            
                        </div>
                        <div className="card-single">
                            <span class="ti-user"></span>
                            <div className="card-body">
                                <small>Followers</small>
                                <h1>54545</h1>
                            </div>      
                        </div>
                        <div className="card-single">                                            
                            <span class="ti-user"></span>      
                            <div className="card-body">
                                <small>Following</small>
                                <h1>54545</h1>
                            </div>      
                        </div>
                        <div className="card-single">                                            
                            <span class="ti-user"></span>      
                            <div className="card-body">
                                <small>Stats</small>
                                <h1>54545</h1>
                            </div>      
                        </div>

                    </div>
                    <div className="user-details">
                        <div className="user-details-card">
                            <div className="avatar">
                                <img src={avatar} />                                
                            </div>
                            <div className="user-name">
                                <span>Juanita Torres Hernandez</span>
                                <span>@juanita</span>
                            </div>
                            <div className="user-info">
                                <div className="item-info">
                                    <span className="ti-location-pin"></span>
                                    <span>Guadalajara Jalisco, México</span>
                                </div>
                                <div className="item-info">
                                    <span className="ti-email"></span>
                                    <span>juanita@gmail.com</span>
                                </div>
                                <div className="item-info">
                                    <span className="ti-link"></span>
                                    <span>https://juanita.github.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="user-repositories-list d-none d-sm-block">
                            <UserRepositoryList />

                        </div>                  
                    </div>
                </div>
                
                :
                <Empty />
            }
        </div>
    )
}