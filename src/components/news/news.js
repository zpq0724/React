import React,{Component,Fragment} from "react";
import Search from "./children/search";
import TabBar from "./children/tabBar";
import TopList from "./children/topList";
import CenterPic from "./children/centerPic";
import AllList from "./children/allList";
import "./style/news.css";
import {connect} from "react-redux";
import{
   toplist_action
    } from "../../actions/actionCreator"
 class News extends Component{
    render(){
        //console.log(this.props.topList)
        let {topList} = this.props;
        return(
           <Fragment>
                <Search/>
                <TabBar/>
                <TopList topList={topList}/>
           </Fragment>
        )
    }
    componentDidMount(){
         this.props.gettopListData();  //异步事件，打印不到数据要在 runder 钩子函数中打印
    }
}



const mapStateToProps = (state)=>({
    topList:state.news.topList
})

const mapDispathToProps = (dispatch)=>({
    gettopListData(){
        dispatch(toplist_action())
    }
})
export default connect(mapStateToProps,mapDispathToProps)(News)