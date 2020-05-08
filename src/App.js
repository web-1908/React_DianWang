import React, { Component } from 'react'
import './App.css'
import Index from './dianWang/index'
import PeiZhi from './dianWang/PeiZhi'

class App extends Component{
  render(){
     return (
        <div>
          <Index/>
          <br/>
          <PeiZhi/>
        </div>
      )
  }
}
export default App;

