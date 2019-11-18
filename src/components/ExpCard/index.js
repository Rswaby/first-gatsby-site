import React from 'react';

const ExpCard = ({ ExpData }) => {
    return (
        <div className={"myCard"}>
            <div>
                {ExpData}
            </div>
            <div>
                <img src="https://animesouls.com/wp-content/uploads/2017/03/14.jpg"
                    alt={"sasuke"}
                    width={"100%"}
                    height={"100%"}
                    style={{ marginBottom: 0 }}
                ></img>
            </div>
        </div>
    );
}

export default ExpCard;