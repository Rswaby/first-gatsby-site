import React from 'react';

const ExpCard = ({ ExpData }) => {
    return (
        <div className={"myCard"}>
            <div>
                <p>{ExpData}</p>
            </div>
            <div>
                <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
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