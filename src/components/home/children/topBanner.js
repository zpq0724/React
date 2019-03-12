import React, { Component } from "react";
//引入swiper
import "../../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
import "../style/index.css"
export default class TopBanner extends Component {
    render() {
        let {topBanner} = this.props;
        //console.log(this.props)
        return (
            <div>
                <div className="search" onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-search"></i> 
                </div>
            <div className="swiper-container  topBanner" ref="topBanner">
                <div className="swiper-wrapper">
                  {/*  
                    {
                        topBanner.flash.length>0?topBanner.flash.map((item,index)=>{
                            return (
                                <div className="swiper-slide" key={index}>
                                <div className="TopBanner" key={index}><img src={item.picurl}/></div>
                            </div>
                            )
                        }):"!"
                    }             */}                  
                </div>
                <div className="swiper-pagination topBanner_pagination"></div>
            </div>
            </div>
        )
    }

handleClick(){
  //alert(11)
  //console.log(this.props)
    this.props.lis.history.push("/search");
    //console.log(this.props)
}

    //得到真实的dom结构，实例化swiper
    componentDidMount() {
        setTimeout(() => {
            new Swiper(this.refs.topBanner,
                {
                    autoplay: {                      
                        disableOnInteraction: false,
                    }
                }
            )
        },500)

    }

}
