import React from 'react';
import empty from '../../assets/images/empty.png';
import '../../assets/styles/components/common/empty.css';

export const Empty = () => {
    return (
        <div className="empty-container">
            <img src={ empty } className="img-fluid" alt="Responsive image" />
        </div>
    )
}
