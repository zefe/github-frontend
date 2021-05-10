import React from 'react';

export const UserRepositoryRow = ( props ) => {
    
    const { repository, handleRowClick } = props;

    return (
        <>
            <tr key={ repository.id } onClick={() => handleRowClick(repository.id)} >
                <td>{ repository.name }</td>
                <td>{repository.description}</td>
                <td>{repository.language}</td>
                <td>{ repository.forks }</td>
            </tr>
            
        </>
    )
}
