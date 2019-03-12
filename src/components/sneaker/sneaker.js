import React,{Component,Fragment} from "react";
import Search from "./children/search";
import Banner from "./children/banner";
import "./style/index.css";
import {connect} from "react-redux"
import {sneaker_action} from "../../actions/actionCreator"
 class Sneaker extends Component{
    render(){
        let {banner} = this.props;
        return(
          <Fragment>
              <Search/>
              <Banner banner={banner}/>
          </Fragment>
        )
    }

    componentDidMount(){
        this.props.getSneakerData()
    }
}



const mapStateToProps=(state)=>({
    banner:state.sneaker.banner
})

const mapDispatchToProps = (dispatch)=>({
    getSneakerData(){
        dispatch(sneaker_action())
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(Sneaker)