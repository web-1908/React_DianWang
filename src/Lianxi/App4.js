import React, { Component } from 'react';
import axios from 'axios'

class App extends Component{
  componentDidMount(){
    axios.get('https://route.showapi.com/1211-1',{
      params:{
        showapi_appid:10
      }}).then((res)=>{
        console.log(res);
    })
  }
  render(){
     return (
        <div>
          <h1>数据请求</h1>
        </div>
      )
  }
}
 
export default App;

