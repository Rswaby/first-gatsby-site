import React from 'react';

const ExpCard = ({ ExpData }) => {
    return (
        <div className={"myCard"}>
            <div>
                <p>{ExpData}</p>
            </div>
            <div>
                <img src="https://static.toiimg.com/photo/msid-67868104/67868104.jpg?1368689"
                    alt={"sasuke"}
                    width={"500px"}
                    height={"315px"}
                    style={{ marginBottom: 0,display:"block",textAlign:"center" }}
                ></img>
            </div>
        </div>
    );
}

export default ExpCard;