import React, { useState } from 'react';
import { useForm } from '../../Hooks/useForm';

import '../../assets/styles/components/repository/repository.css';
import { Empty } from '../Common/Empty';
import { Search } from '../Common/Search';
import { RepositoryRow } from './RepositoryRow';

export const Repository = () => {

    const [repositoryList, setrepositoryList] = useState([
        {
            id: 1,
            name: 'React',
            description: 'Description loremimsuodñlDescription',
            language: 'Lenguajes',
            updated: 'Updated 2 days ago'
        },
        {
            id: 2,
            name: 'React',
            description: 'Description loremimsuodñl',
            language: 'Lenguajes',
            updated: '21-JUN-1985'
        },
        {
            id: 3,
            name: 'React',
            description: 'Description loremimsuodñl',
            language: 'Lenguajes',
            updated: '21-JUN-1985'
        },
    ]);
    
    const PLACE_HOLDER = 'Search by repository';

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Get user details")
    }

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    return (
        <>
            <Search                
                searchText={ searchText }
                handleSearch={ handleSearch }
                handleInputChange= { handleInputChange }
                placeholder={ PLACE_HOLDER }

            />
            {
                repositoryList ? 
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
                :
                <Empty />

            }

        </>
    )
}
