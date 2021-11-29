import React, { Component } from 'react'

export default class Add extends Component {
    constructor(props){
        super(props)
        this.state={
            isAdd:false,
            //传递给父组件PeiZhi的参数
            name:'',
            type:'',
            IPaddress:'',
            MACaddress:'',
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            isAdd: props.isAdd,
        })
    }
    isAdd(){
        this.setState({isAdd:false})
    }
    getMsg(e){
        this.setState({name:e.target.value})
        
    }
    getMsg2(e){
        this.setState({type:e.target.value})
    }
    getMsg3(e){
        this.setState({IPaddress:e.target.value})
    }
    getMsg4(e){
        this.setState({MACaddress:e.target.value})
    }
    //点击保存的触发事件 调用父组件传来的函数传递参数
    getMsg5=()=>{
        this.props.getMsg(this.state.name,this.state.type,this.state.IPaddress,this.state.MACaddress);
    }
    render() {
        return (
            <div className='AddContainer' style={this.state.isAdd?{display:'block'}:{display:'none'}}>
                <div className='PeiZhiAdd'>
                    <span className='point' onClick={this.isAdd.bind(this)}>取消</span>
                    <div className="PeiZhiAddTit">新增配置IP</div>
                    <div className='PeiZhiMain'>
                        <div className='input'>
                            <label for='name' className='point'>设备名称 ：</label>
                            <input id='name' type="text" onChange={this.getMsg.bind(this)}/>
                        </div>
                        <div className='input'>
                            <label for='type' className='point'>设备类型 :</label>
                            <input id='type' type="text" onChange={this.getMsg2.bind(this)}/>
                        </div>
                        <div className='input'>
                            <label for='IPaddress' className='point'>IP地址 :</label>
                            <input id='IPaddress' type="text" onChange={this.getMsg3.bind(this)}/>
                        </div>
                        <div className='input'>
                            <label for='MACaddress' className='point'>MAC地址 :</label>
                            <input id='MACaddress' type="text" onChange={this.getMsg4.bind(this)}/>
                        </div>
                        <div className='AddSub point' onClick={this.getMsg5.bind(this)}>
                            保存
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}
