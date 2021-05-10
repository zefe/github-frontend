import React, { useState } from 'react';

import { UserRepositoryRow } from './UserRepositoryRow';
import '../../assets/styles/components/user/userRepositoryList.css';

export const UserRepositoryList = () => {

    const handleRowClick = () => {
        console.log("Hello handle click")
    };

    const [ repositoryList, setRepositoryList ] = useState([
        {
            id: 1,
            name: 'React',
            description: 'Decription of this repository is not available because you don have permission to see',
            language: "JavaScript",
            updated: '24-FEB-2021'

        },
        {
            id: 1,
            name: 'React',
            description: 'Decription of this repository is not available because you don have permission to see',
            language: "JavaScript",
            updated: '24-FEB-2021'

        },
        {
            id: 1,
            name: 'React',
            description: 'Decription of this repository is not available because you don have permission to see',
            language: "JavaScript",
            updated: '24-FEB-2021'

        },
        {
            id: 1,
            name: 'React',
            description: 'Decription of this repository is not available because you don have permission to see',
            language: "JavaScript",
            updated: '24-FEB-2021'

        }
    ])

    const showData = () => {
 
        if(repositoryList.length !== 0){

            return  repositoryList.map( repository => (
                <RepositoryRow
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
                        <th>UPDATED</th>
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