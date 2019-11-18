import React from 'react';
import '../../css/experience.css';
const CustomGrid = ({ children }) => {
    return (
        <div className={"main-grid"}>
            {children}
        </div>
    );
}

export default CustomGrid;