import React from 'react';
import '../../css/experience.css';
const CustomGrid = ({ children }) => {
    return (
        <div className={"main-grid mTop10"}>
            {children}
        </div>
    );
}

export default CustomGrid;