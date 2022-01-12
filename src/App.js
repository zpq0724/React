import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from "react-router-dom";
import Home from "./components/home/home";
import News from "./components/news/news";
import Sneaker from "./components/sneaker/sneaker";
import Shopping from "./components/shopping/shopping";
import My from "./components/my/my";
import Search from "./components/search/search";
import store from "./store";
import Details from "./components/details/details"
import {Provider} from "react-redux"
import 'antd/dist/antd.css'
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
      <div>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/news" component={News} />
            <Route path="/sneaker" component={Sneaker} />
            <Route path="/shopping" component={Shopping} />
            <Route path="/my" component={My} />
            <Route path ="/search" component={Search}/>
            <Route path ="/details" component={Details}/>
            <Redirect path="/" to="/home" />
          </Switch>
        {/* <div id="footer">
          <ul>
            <li>
                <NavLink to="/home"><i className="iconfont">&#xe614;</i><span>首页</span></NavLink>
                <NavLink to="/news"><i className="iconfont">&#xe771;</i><span>资讯</span></NavLink>
                <NavLink to="/sneaker"><i className="iconfont">&#xe52a;</i><span>球鞋</span></NavLink>
                <NavLink to="/shopping"><i className="iconfont">&#xe60b;</i><span>购物</span></NavLink>
                <NavLink to="/my"><i className="iconfont">&#xe658;</i><span>我的</span></NavLink>
            </li>
          </ul>
        </div> */}
      </div>
      </Router>
      </Provider>

    );
  }
}

export default App;
