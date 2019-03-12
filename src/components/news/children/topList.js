import React, { Component } from "react";

export default class TopList extends Component {
    render() {
        let { topList } = this.props;
        console.log(topList)
        return (
            <div id="topListWrap">
                
                    {
                         topList.length>0?topList.map((item, index) => {
                                return <div id="topList" key={index}>
                                            <div className="picLeft">
                                            <img src={item.coverurl}/>
                                            </div>
                                            <div id="rightText">
                                                <p className="ItemTitle">{item.title}</p>
                                                <div id="timeInfo">
                                                <p>{item.categoryname}</p>
                                                <p>{item.publishtime}</p>
                                                </div>
                                            </div>
                                        </div>
                            }):"正在加载"
                        }
                   
                        
                    
              
            </div>
        )
    }
}