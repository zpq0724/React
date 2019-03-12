import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import "../../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
const qs = require("querystring");
class DetailPic extends Component {
    render() {
        //console.log(this.props.list)
        let list = this.props.list
        console.log(list);
        return (
            <div>
                <div className="search" onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-chevron-left"></i> 
                </div>
                <div className="swiper-container detail_banner" ref="detailPicBanner">
                    <div className="swiper-wrapper detailswiper">
                        {
                             !! list.mainpic?list.mainpic.split("|").map((item, index) =>{
                                            return <div className="swiper-slide detailSwiper-slide" key={index}><img src={item} /></div>
                            }): null
                        }
                    </div>
                    <div className="swiper-pagination topBanner_pagination"></div>
                </div>
            </div>

        )
    }
    handleClick(){
        this.props.history.push("/home")
    }
    componentDidMount() {
        setTimeout(() => {
            new Swiper(this.refs.detailPicBanner,
                {
                    autoplay: {                      
                        disableOnInteraction: false,
                    }
                }
            )
        }, 200)

    }
  
}
export default withRouter(DetailPic)