import React from 'react';
const ProjCard = ({ Data }) => {
    return (
        <div className={"project-card-grid"}>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu3FrWCOi59a-Zems8rHMPaxxsKThUlRg6-ZOGe9fFgmMblQi&s"
                    alt="stock"
                />
                <div>technologies</div>
            </div>
            <p>{Data}</p>
        </div>
    );
}

export default ProjCard;