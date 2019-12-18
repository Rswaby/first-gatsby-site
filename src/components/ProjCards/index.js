import React from 'react';
const ProjCard = ({ Data }) => {
    return (
        <div className={"project-card-grid"}>
            <div className={"project-card-grid-inner"}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxu3FrWCOi59a-Zems8rHMPaxxsKThUlRg6-ZOGe9fFgmMblQi&s"
                    alt="stock"
                />
                <div>
                    <h5>Stack</h5>
                    <lu>
                        <li>Java</li>
                        <li>StringBoot</li>
                        <li>mySql</li>
                    </lu>
                </div>
            </div>
            <p>{Data}</p>
        </div>
    );
}

export default ProjCard;