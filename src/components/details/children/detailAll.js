import React, { Component, Fragment } from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
const tabs = [
    { title: '商品详情' },
    { title: '购物须知' }

];

class DetailCon extends Component {
    render() {
        console.log(this.props.list)
        let list = this.props.list
        return (
            <div className="detailAll">
                <div className="shangbiao">
                    <div className="logo">
                        <img src={list.brandlogo} />
                    </div>
                        <p className="pCountry">{list.brandname}</p>
                         <p className="ptitle">{list.brandmemo}</p>
                    </div>
                <div>
                    <WhiteSpace />
                        <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
                            <div style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                                {
                                    list.mainpic ? list.mainpic.split("|").map((item, index) => {
                                        return <div className="one" key={index}><img src={item} /></div>
                                    }) : null
                                }
                             </div>

                        <div className="two" style={{justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                           <p>Q:下单之后要多久可以收到宝贝？</p>
                           <p>A：一般提交订单后30分钟内需完成付款，限量发售的订单需在5分钟内付款，过时系统会自动关闭订单。限量发售的商品会由于抢购人数过多，可能出现超卖现象。斗牛会按照先付款先发货的原则，对超卖的订单进行退款处理，敬请谅解！</p>

                           <p>Q:什么时候发货？</p>
                           <p>A:国内发货商品正常48小时内发出；海外发货商品付款后72小时内发出，如因大促、不可抗力等特殊情况可能会对到货时间略有延误。特殊商品发货时间另行标注为准。</p>
                                                      <p>Q:下单之后要多久可以收到宝贝？</p>
                           <p>A：一般提交订单后30分钟内需完成付款，限量发售的订单需在5分钟内付款，过时系统会自动关闭订单。限量发售的商品会由于抢购人数过多，可能出现超卖现象。斗牛会按照先付款先发货的原则，对超卖的订单进行退款处理，敬请谅解！</p>

                           <p>Q:什么时候发货？</p>
                           <p>A:国内发货商品正常48小时内发出；海外发货商品付款后72小时内发出，如因大促、不可抗力等特殊情况可能会对到货时间略有延误。特殊商品发货时间另行标注为准。</p>
                         </div>
                  
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>

        )
    }




}
export default DetailCon;