import React,{Component,Fragment} from "react";
import DetailPic from "./children/detailPic";
import DetailCon from "./children/detailCon";
import DetailAll from "./children/detailAll";
import {details_action} from "../../actions/actionCreator";
import {connect} from "react-redux";
import "./detail.css";
import {
    withRouter
} from "react-router"
 class Details extends Component{
     constructor(props){
        super(props)
        this.state = {
            list: {},
            test: 1
        }
     }
    render(){
        let {details} = this.props;
        //console.log(details)
        return(
            <Fragment>
                <DetailPic details={details} list={this.state.list}/>
                <DetailCon list = {this.state.list}/>
                <DetailAll list ={this.state.list}/>
            </Fragment>
        )
    }

//请求详情页的数据
    //  a,b,c,d,e,f        之前的
    //  a,g,b,c,d,e,f         修改后
    componentDidMount() {
        this.setState({ //异步，
            test: 22222222222222
        },()=>{
            //console.log(this.state.text)
        })
        // console.log(1)
        // console.log(this.props.location.search.slice(1).split("=")[1])
        this.props.getDetailsData();
        fetch("https://mapi.eyee.com/api/Product/DetailV236", {
            method: "post",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                version: "2.6.5",
                lang: "zh",
                os: "h5",
                deviceid: "h5",
                sign: "4666d122befee6a7bfed9dce80e1997c",
                param:
                "%7B%22productid%22%3A%22" + this.props.location.search.slice(1).split("=")[1] + "%22%2C%22requestid%22%3A%221545489748091504%22%7D",
                extend: "/api/Product/DetailV236"
            })
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list: data.data.info
                })
                // console.log(this.state.list)
            //  console.log(data.data.info)
            })
}
}


const mapstateToProps = (state)=>({
     details:state.details.details
})

const mapDispatchToProps = (dispatch)=>({
    getDetailsData(){
        dispatch(details_action())
    }
})

    
export default withRouter(connect(mapstateToProps,mapDispatchToProps)(Details))
