import React from 'react';
// import Image from '../image'
const ExpCard = ({ ExpData }) => {
    return (
        <div className={"myCard"}>
            <div>
                <div className={"flex-container"}>
                    <h4 className={"company-title"}>Company Name</h4>
                    <label>Jan 2018 - Jan 2019</label>
                </div>
                <p>{ExpData}</p>
                <div className={"company-tech"}>
                    {
                        [1, 2, 3, 4, 5].map((l, index) =>
                            <label className={"tech-label"}>
                                <span style={{ padding: '5px' }}> tech{index} </span>
                            </label>
                        )
                    }
                </div>
            </div>
            <div>
                <img src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
                    alt={"sasuke"}
                    width={"500px"}
                    height={"315px"}
                    style={{ marginBottom: 0, display: "block", textAlign: "center" }}
                ></img>
            </div>
        </div>
    );
}

export default ExpCard;
