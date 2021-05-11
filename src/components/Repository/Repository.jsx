import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../Hooks/useForm';

import { getRepositoryList } from '../../stateManagement/actions/githubActions';

import '../../assets/styles/components/repository/repository.css';
import { Empty } from '../Common/Empty';
import { EmptyNotFound } from '../Common/EmptyNotFound';
import { Search } from '../Common/Search';
import { RepositoryRow } from './RepositoryRow';
import { Spinner } from '../Common/Spinner';


export const Repository = () => {
    
    const PLACE_HOLDER = 'Search by repository';
    const dispatch = useDispatch();
    const repositoriesState = useSelector(state => state.RepositoryList);

    const repositoryList = repositoriesState.data.items;
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch( getRepositoryList(searchText) );
    }


    const showData = () => {

        if(repositoriesState.loading){
            return  (
                <div className="container-spinner">
                    <Spinner />
                </div>
            )
        }

        if(repositoriesState.errorMessage !== '') {
            return (
                <div className="user-not-found">
                    <h3>{repositoriesState.errorMessage}</h3>
                    <EmptyNotFound />
                </div>
            )
        }
        
        if((Object.entries(repositoriesState.data).length !== 0) && (repositoryList.length !== 0)) {
            return(
                <div className="repository-container">            

                    <div className="repository-container-list">
                        <div className="list-header">
                            <div className="list-title">
                                <h3>Repository results</h3>                        
                            </div>
                        </div>
                        <div>
                            {
                                repositoryList.map( repository => (
                                    <RepositoryRow 
                                        key={ repository.id }
                                        repository={ repository }
                                    />
                                ))
                            }
                        </div>

                    </div>
                </div>
            )
        }

        return(
            <Empty />
        )
     }

    return (
        <>
            <Search                
                searchText={ searchText }
                handleSearch={ handleSearch }
                handleInputChange= { handleInputChange }
                placeholder={ PLACE_HOLDER }

            />
            {
                showData()
            }

        </>
    )
}
