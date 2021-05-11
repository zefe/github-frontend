import React from 'react';

import searchIcon from '../../assets/icons/Search.svg';
import '../../assets/styles/components/common/search.css';

export const Search = ({ searchText, handleSearch, handleInputChange, placeholder  }) => {

    return (
        <div className="search-wrapper" >
            <div className="row">                
                <form onSubmit={ handleSearch } >
                    <input
                        type="text"
                        placeholder={ placeholder }
                        className="search-input"
                        name="searchText"
                        value={ searchText }
                        onChange={ handleInputChange }
                        required
                    />
                    <button className="search-button" >
                        <img src={ searchIcon } alt="search icon" />
                    </button>
                </form>
            </div>
        </div>
    )
}
