import React, { Component, Fragment } from "react";

class DetailCon extends Component {
    render() {
        console.log(this.props.list)
        let list = this.props.list
        return (
            <div className="con">
                <div className="conprice">￥{list.saleprice}</div>
                <p className="context">{list.name}</p>
                <p className="sendadd">发货地：上海市  运费：至全国￥0元</p>   
            </div>

        )
    }
        

    
  
}
export default DetailCon;