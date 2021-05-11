import React from 'react';
import { useSelector } from 'react-redux';

import { UserRepositoryRow } from './UserRepositoryRow';
import '../../assets/styles/components/user/userRepositoryList.css';

export const UserRepositoryList = () => {

    const handleRowClick = () => {
        //To open repository new window on github
    };

    const userState = useSelector(state => state.User);
    
    const repositoryList = userState.userRepos;


    const showData = () => {
 
        if(repositoryList.length !== 0){

            return  repositoryList.map( repository => (
                <UserRepositoryRow
                    key={ repository.id }
                    repository={ repository }
                    handleRowClick ={ handleRowClick }
                />
            ));

        }

        /*
        if(errorMessage !== "") {
            return <p>{errorMessage}</p>
        }
        */
    };

    return (
        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>REPOSITORY</th>
                        <th>DESCRIPTION</th>
                        <th>LANGUAGE</th>
                        <th>FORKS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        showData()
                    }
                    
                </tbody>
            </table>

        </div>
    )
}