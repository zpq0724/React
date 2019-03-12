import React,{Component} from "react";
export default class Search extends Component{
    render(){
        return(
            <div id="search">
                <input  className="inputInfo" type="text"  placeholder="Search"/>      
            </div>
        )
    }
}