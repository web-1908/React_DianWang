import React, { Component } from 'react'

export default class alertOne extends Component {
     constructor(props){
        super(props);
        this.state={
            isClick:false,
            content:'',
            isGuo:false
        }
    }
    // componentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染。
    componentWillReceiveProps(props) {
            this.setState({
                isClick: props.isClick,
                content:props.content,
                isGuo:props.isGuo
            })
    }
    close(){
        this.setState({isClick:false})
      }
    render() {
        return (
            <div className='alert' style={this.state.isClick&&this.state.isGuo?{display:'block'}:{display:'none'}}>
                <div className='alerttit'>
                    <span>{this.state.content}</span>
                    <span className='point' onClick={this.close.bind(this)}>
                        <img src={require("../images/close.png")} alt=""/>
                    </span>
                </div>
                <div>
                  {/* 关机图 */}
                  <div className='point guanji'>
                    <img src={require('../images/guanji.png')} alt=""/>
                  </div>
                </div>
            </div>
        )
    }
}
