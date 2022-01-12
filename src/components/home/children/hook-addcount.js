 /** 
  react hooks 
  纯函数没有状态  useState() 用于为函数组件引入状态
  useState() 返回一个数组，第一项是一个变量，指向状态的当前值。第二个是函数，用来更新状态。该函数的命名，我们约定为set前缀加状态的变量名。

*/


import React, {useState} from "react";
function  HooksAddCount() {
  const [ count, setCount] = useState(0);

  const addCount = () => {
    let newCount = count;
    setCount(newCount += 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}> count自增</button>
    </>
  )
}

// const HooksAddCount = () => {
//   const [ count, setCount ] = useState(0)
//   const addcount = () => {
//     let newCount = count
//     setCount(newCount+=1)
//   } 
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={addcount}>count++</button>
//     </>
//   )
// }
export default HooksAddCount;