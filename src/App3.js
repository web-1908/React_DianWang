import React, { Component } from 'react';
 
import { HashRouter,BrowserRouter, Route,Link} from 'react-router-dom';
 
import About from './Router/About';
import Details from './Router/Details';

class App extends Component{
  render(){
     return (
   // HashRouter,BrowserRouter两种不同的路由模式
          <HashRouter>
            <Link to="/about" >关于我们</Link><br/>
            <Link to="/details" >商品详情</Link><br/>
            <hr/>          
{/*以下为路由配置*/}
 
            <Route path='/about' component={About} />
            <Route path='/details' component={Details} />    
          </HashRouter>
 
      );
 
  }
 
}
 
export default App;

