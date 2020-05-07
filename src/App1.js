import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './button/Login';
import LoginOut from './button/LoginOut';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      date:new Date().toLocaleTimeString(),
      istrue:true,
      numbers:[1,2,3,4,5],
      value:'',
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({date:new Date().toLocaleTimeString()})
    },1000)
  }
  change(){
    this.setState({istrue:!this.state.istrue});
  }

  render(){
    let button;
    if(this.state.istrue){
      button=<Login onClick={this.change.bind(this)}/>
    }else{
      button=<LoginOut onClick={this.change.bind(this)}/>
    }

    return(
      <div style={{backgroundColor:'pink'}}>
        <h5>
          {this.state.date}
        </h5>
        <button onClick={this.change.bind(this)}>
          {this.state.istrue?'on':'off'}
        </button>

        {button}

        {/* 列表和key */}
          {this.state.numbers.map((number,index)=>{
            return(
              <ul key={index}>
                <li >{number}</li>
              </ul>
            )
          })}
        {/* 双向数据绑定 */}
        <input type="text" value={this.state.value} onChange={(e)=>{
          this.setState({value:e.target.value});
        }}/>
      </div>
    )
  }
}

export default App;
