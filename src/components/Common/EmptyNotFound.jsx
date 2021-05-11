import React from 'react';
import { ReactComponent as EmptyBoxNotFound} from '../../assets/images/emptyBoxNotFound.svg';
import '../../assets/styles/components/common/empty.css';

export const EmptyNotFound = () => {
    return (
        <div className="empty-container">
            <EmptyBoxNotFound />
        </div>
    )
}