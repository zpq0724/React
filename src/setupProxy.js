//设置代理
//https://mapi.eyee.com/capi/product/qiuxie/open/firstpageshowV268?os=3
const proxy = require("http-proxy-middleware");
module.exports = (app)=>{
    app.use("/capi",proxy({
        target:"https://mapi.eyee.com",
        changeOrigin:true
    }))
}



