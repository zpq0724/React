import {fetch} from "whatwg-fetch";

//获取news页面数据
export const toplist_action = ()=>({
    type:"TOPLISTDATA",
    payload:new Promise(resolve=>{
//https://mapi.eyee.com/api/article/searchV236
      /*  let url="/api/article/searchV236";*/
      fetch("https://mapi.eyee.com/api/article/searchV236", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            version: "2.8.2", 
            lang: "zh",
            os: "h5",
            deviceid: "h5",
            sign: "7a802967e22165e20863a9dce70e564",
            param: "%7B%22pageindex%22%3A1%2C%22sorttype%22%3A0%7D",
            extend: "/api/article/searchV236"
        })
      })
        .then(res=>res.json()) 
        .then((data)=>{
            resolve(data)    
        })
    })
})

//获取首页顶部轮播
export const topBanner_action= ()=>({
    type:"TOPBANNERDATA",
    payload:new Promise(resolve=>{
        fetch('https://mapi.eyee.com/api/base/HomeFirst', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          version: "2.6.5",
          lang: "zh",
          os: "h5",
          deviceudid: "h5",
          sign: "f314466cd545484e3076950b71fa3cc4",
          param: "",
          extend: "/api/base/HomeFirst"
        })
      })
      .then(res => res.json())
      .then((data) => {
       resolve(data)
      })
    })
})

//获取home 猜你喜欢 数据(post请求的数据，直接这样获取)
  export const guess_action=()=>({
    type:"GUESS_DATA",
    payload:new Promise(resolve=>{
      fetch("https://mapi.eyee.com/api/product/guessWhatYouLike",{
        method:"post",
        headers:{
         'Content-Type': 'application/json;charset=UTF-8'
        },
        body:JSON.stringify({
          version: "2.8.2",
          lang: "zh",
          os: "h5",
          deviceid: "h5", 
          sign: "17b58bf42695f18941751822cda4da10",
          param: "%7B%22pageindex%22%3A1%7D",
          extend: "/api/product/guessWhatYouLike"
        })
      })
      .then(res=>res.json())
      .then((data)=>{
        //console.log(data)
        resolve(data)
      })
    })
  })

//获取sneaker页面的数据
export const sneaker_action = () => ({
  type: "SNEAKER_DATA",
  payload: new Promise(resolve => {
    let url = "/capi/product/qiuxie/open/firstpageshowV268?os=3"
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        resolve(data)
        //console.log(data)
       
      })
  })
})

//获取详情页数据
export const details_action = () =>({
  type:"DETAIL_DATA",
  payload:new Promise(resolve=>{
   fetch("https://mapi.eyee.com/api/Product/DetailV236",{
      method:"post",
      headers:{
         'Content-Type': 'application/json;charset=UTF-8'
      },
      body:JSON.stringify({
        version: "2.8.2", 
        lang: "zh",
        os: "h5",
        deviceid: "h5",
        sign: "c00b77755c48e9dd623984eefb33f7ed",
        param: "%7B%22productid%22%3A%22fc635125a73c41e19f24d766c4e29400%22%2C%22requestid%22%3A%221545482466242518%22%7D",
        extend: "/api/Product/DetailV236"
      })
   })
   .then(res=>res.json())
   .then((data)=>{
     //console.log(data)
     resolve(data)
   })
  })
})