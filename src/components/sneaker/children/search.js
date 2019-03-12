import React,{Component} from "react";
export default class SecTitle extends Component{
    render(){
        return (
            <div className="searchwrap">
               <div className="change">
               </div>
               <div className="search">
                   <input type="text" placeholder="搜索"/>
               </div>
            </div>

        )  
    }
}