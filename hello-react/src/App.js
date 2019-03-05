import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router, Route,NavLink,Redirect  } from "react-router-dom";
import { Switch } from 'react-router';

import Home from './components/home';
import My from './components/my';
import List from './components/list';
import HomeOne from './components/homeOne'
import Details from './components/details'

class App extends Component {
  render() {
    return (
        // 路由外围大标签，所有路由的配置项都必须在这个标签内,当前标签只能有一个子节点
        <Router>
          <Fragment>
          {/** 
            compoment 渲染*/}
            <Switch>
              <Redirect path='/' exact to="/home" />
              <Route path="/home" exact component={Home}></Route>
              <Route path="/my" component={My}></Route>
              <Route path="/list" component={List}></Route>
              <Route path='/home/homeOne' component={HomeOne}></Route>
            </Switch>
            {/**params传值 */}
            {/*<Route path='/details/:id/:name' component={Details}/>*/}
            {/**query传值 */}
            <Route path='/details' component={Details}/>


          {/*
            <Route path="/" exact  render={()=>{return <Redirect to='/home' />}}></Route>
            <Route path="/home" exact  render={()=>{return <Home />}}></Route>
            <Route path="/my"  render={()=>{return <My/> }}></Route>
            <Route path="/list"  render={()=>{return <List/>}}></Route>
            <Route path='/home/homeOne' render={()=>{return <HomeOne/>}}></Route>
          */}

            <div id="footer">
              <ul>
                {/*<li><Link to="/home">首页</Link></li>
                <li><Link to="/my">我的</Link></li>
                <li><Link to="/list">列表</Link></li>*/}
                <li><NavLink to="/home">首页</NavLink></li>
                <li><NavLink to="/my">我的</NavLink></li>
                <li><NavLink to="/list">列表</NavLink></li>
              </ul>
            </div>
          </Fragment>
        </Router>
       
    );
  }
}

export default App;
/*
1.BrowserRouter:路由外围大标签；
2.route：当路径匹配的时候渲染指定的组件
参数：
path:路径
component:渲染的方式
render：渲染的方式
route渲染的方式：
》component
》render
》children（基本不用）
3.link:路由跳转方式
to：指定跳转的路径
4.
*/
