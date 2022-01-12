import React from "react";

// https://www.cnblogs.com/byzy/articles/12361918.html

// 父传子
// class ParentList extends React.Component {
//   constructor() {
//       super();
//       this.state = {
//           name:'老张',
//           msg:'我是父亲'
//       }
//   }
//   render() {
//       return (
//           <div>
//               <h1>父组件</h1>
//               <ChildList data = {this.state}/>
//           </div>
//       )
//   }
// }

// class ChildList extends React.Component {
//   constructor() {
//       super();
//   }
//   render() {
//       return (
//           <div>
//               <h1>我是子组件</h1>
//               <p>{this.props.data.name}</p>
//               <p>{this.props.data.msg}</p>
//           </div>
//       )
//   }
// }



// 子调用父组件方法
// class ParentList extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name:'我是父组件',
//             name1: '我是子组件'
//         }
//     }
//     handleChange(e) {
//         this.setState({
//             name:e.target.value
//         });
//     }
//     handleParent(obj) {
//         this.setState({
//             name:obj.name
//         });
//         // alert('1')
//     }
//     render() {
//         return (
//             <div>
//                 <p> {this.state.name} </p> 
//                 <input type="text" onChange={(e)=>this.handleChange(e)} value={this.state.name}/>   

//                 <ChildList {...this.state} handle={ this.handleParent.bind(this)}/>        
//             </div>
//         )
//     }
// }

// class ChildList extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//         this.state = {
//             name: props.name1
//         }
//     }
//     handleChange(e) {
//         this.setState({
//             name:e.target.value
//         });

//         // 调用父组件handle方法
//         this.props.handle({name:e.target.value}); 
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
//             </div>
//         )
//     }
// }


// 兄弟组件传值


 class ParentList extends React.Component {
     constructor() {
         super();
         this.state = {
             name:'父组件'
         }
     }
     handleParent(data) {
        this.setState({
            name:data
        });
     }
    render() {
        return (
            <div>
                <p> {this.state.name} </p> 
                <ChildListA handle = {this.handleParent.bind(this)}/>
                <ChildListB data={this.state.name}/>
            </div>
        )
    }
 }

 class ChildListA extends React.Component {
   
    constructor() {
        super();
    }
   render() {
       return (
           <div>
                <button onClick={()=>this.props.handle('子组件')}>兄弟传递</button>
           </div>
       )
   }
}

class ChildListB extends React.Component {
    constructor() {
        super();
    }
   render() {
       return (
           <div>
               {this.props.data}
           </div>
       )
   }
}


 
export default ParentList;