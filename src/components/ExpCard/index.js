import React from 'react';
import ReactMarkdown from 'react-markdown'
const ExpCard = ({ ExpData }) => {
    return (
        <div className={"myCard"}>
            {console.log(ExpData.item)}

            <div>
                <div className={"flex-container"}>
                    <h4 className={"company-title"}>{ExpData.item.companyName}</h4>
                    <label>{ExpData.item.date}</label>
                </div>
                <label>{ExpData.item.position}</label>
                <ReactMarkdown source={ExpData.item.description} />
                <div className={"company-tech"}>
                    {
                        ExpData.item.techs.map((tech, index) =>
                            <label key={tech + "ExpCard" + index} className={"tech-label"}>
                                <span style={{ padding: '5px' }}> {tech} </span>
                            </label>
                        )
                    }
                </div>
            </div>
            <div>
                <img src={ExpData.item.imgurl}
                    alt={"sasuke"}
                    width={"500px"}
                    style={{ marginBottom: 0, display: "block", textAlign: "center" }}
                ></img>
            </div>
        </div>
    );
}

export default ExpCard;
