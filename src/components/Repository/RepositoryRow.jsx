import { React } from 'react';
import { ReactComponent as IconCode }  from '../../assets/icons/code.svg';
import { ReactComponent as IconCalendar }  from '../../assets/icons/calendar.svg';
import '../../assets/styles/components/repository/repositoryRow.css';

export const RepositoryRow = ({ repository }) => {

    const { owner, name, description, language, updated_at, html_url } = repository;

    return (
        <div className="repository-row" >
            <a href={ html_url } target="_blank" rel="noreferrer" >
                <div className="repository-item" >
                    <div className="repository-name">
                        <img src={ owner.avatar_url } alt="avatar url"/>
                        <div className="repository-owner">
                            <span>{ name }</span>
                            <span>{ owner.login }</span>
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
                            <span>{ updated_at }</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}