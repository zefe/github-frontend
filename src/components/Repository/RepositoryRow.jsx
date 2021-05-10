import { React } from 'react';
import { ReactComponent as IconCode }  from '../../assets/icons/code.svg';
import { ReactComponent as IconCalendar }  from '../../assets/icons/calendar.svg';
import '../../assets/styles/components/repository/repositoryRow.css';

import avatar from '../../assets/images/avatar.png';

export const RepositoryRow = ({ repository }) => {

    console.log(repository)

    const { name, description, language, updated } = repository;

    return (
        <div className="repository-row" >
            <div className="repository-item" >
                <div className="repository-name">
                    <img src={ avatar } />
                    <div className="repository-owner">
                        <span>React</span>
                        <span>Facebook</span>
                    </div>
                </div>
                <div>{ description }</div>
                <div className="container-two-last-columns">
                    <div className="repository-language">
                        <span ><IconCode /></span>
                        <span>{ language }</span>
                    </div>
                    <div className="repository-updated">
                        <span ><IconCalendar /></span>
                        <span>{ updated }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}