import React,{Component} from "react";


import {Link} from "react-router-dom";
export default class GessLike extends Component{
    render(){
        let {guessList} = this.props
    //    console.log(guessList.list)
        return (
            <div className="guessWrap">
                 <div className="guess">
                    <p>—— 猜你喜欢 ——</p>
                </div>
                <div className="guesslist">
                        {
                           guessList.list.length >0?guessList.list.map((item,index)=>{ //map(item,index)
                        return  <Link to={"/details?id="+item.id} key={index}>
                                    <div className="guesslistcon">
                                        <img src={item.mainpic}/>
                                        <div className="guessPrice">￥{item.saleprice}</div>
                                        <div className="guessName">{item.brandname}</div>
                                        <div className="guessDec">{item.name}</div>
                                    </div> 
                                </Link>
                            }):"!"
                        }

                        <div className="GoTop"></div> 
                </div>
                 
                   
               
            </div>
           
        )
    }
}