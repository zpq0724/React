import React, { Component } from "react";
import "../../../../node_modules/swiper/dist/css/swiper.css";
import Swiper from "swiper";
export default class CenterBanner extends Component {
    render() {
        let { topBanner } = this.props
        //console.log(topBanner)
        // console.log('react', this);
        return (
            <div className="swiper-container center_banner" ref="centerBanner">
                <div className="swiper-wrapper">
                    <div className="swiper-slide oneSwiper-slide">
                        {
                            topBanner.hotbrand.length > 0 ? topBanner.hotbrand.map((item, index) => {
                                if (index < 9) {
                                    return <div className="centerbanner" key={index}>
                                        <img src={item.coverurl} />
                                    </div>
                                }
                            }) : "正在加载"
                        }
                    </div>
                    <div className="swiper-slide oneSwiper-slide">
                        {
                            topBanner.hotbrand.length > 0 ? topBanner.hotbrand.map((item, index) => {
                                if (index > 10) {
                                    return <div className="centerbanner" key={index}>
                                        <img src={item.coverurl} />
                                    </div>
                                }
                            }) : "正在加载"
                        }
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                {/*  <!-- 如果需要滚动条 -->*/}
                <div className="swiper-scrollbar center_banner"></div>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            new Swiper(this.refs.centerBanner,
                {
                    autoplay: {
                        disableOnInteraction: false,
                    }
                }
            )
        }, 200)
    }
}