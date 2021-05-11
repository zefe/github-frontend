import React from 'react';
import { ReactComponent as EmptyBox } from '../../assets/images/emptyBox.svg';
import '../../assets/styles/components/common/empty.css';

export const Empty = () => {
    return (
        <div className="empty-container">
            <EmptyBox />
        </div>
    )
}
