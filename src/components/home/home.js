import React,{Component,Fragment} from "react";
import TopBanner from "./children/topBanner";
import SecTitle from "./children/secTitle";
import GessLike from "./children/gessLike"
// import AddCount1 from "./children/addCount";

// react 类组件
import AddCount1 from "./children/test-class-addCount"

// react hooks
import HooksAddCount from './children/hook-addcount';

// react 组件传值
import ParentList from './children/father-to-child-data';

import CenterBanner from "./children/centerBanner";
import {topBanner_action, guess_action} from "../../actions/actionCreator"
import {connect} from "react-redux";

//引入better scroll
import BScroll from 'better-scroll';
class Home extends Component{
    render(){
        let{topBanner,guessList} = this.props;
       // console.log(this.props.topBanner)
       //console.log(this.props.guessList)
        return(
            <Fragment>
                <div className="scrollwrap" ref="scrollwrap">
                    <div className="content">
                        <AddCount1></AddCount1>
                        <HooksAddCount></HooksAddCount>
                        <ParentList></ParentList>
                        {/* <AddCount></AddCount> */}
                        {/* <TopBanner topBanner={topBanner} lis={this.props}/> */}
                        {/* <SecTitle /> */}
                        {/* <CenterBanner topBanner={topBanner} /> */}
                        {/* <GessLike guessList = {guessList}/>      */}
                    </div>
                </div>
            </Fragment>
           
        )
    }

    //触发请求banner数据的方法
    componentDidMount(){
        this.props.getTopBannerData();
        //console.log(this.props)
        this.props.getGuessData(); 
        
        //betterscroll 实例化
        this.scroll = new BScroll (this.refs.scrollwrap,{
              click:true,
        }) ;
        //console.log(this.scroll)
    }
}

const mapstateToProps = (state)=>({
    topBanner:state.home.topBanner,
    guessList:state.home.guessList
    

})

const mapDispatchToProps =(dispatch)=>({
    getTopBannerData(){
        dispatch(topBanner_action())
    },
    getGuessData(){
        dispatch(guess_action())
    }
})
export default connect(mapstateToProps,mapDispatchToProps)(Home)