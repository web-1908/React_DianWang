import React, { Component } from 'react'
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Ttable from './table'
import Add from './Add'

export default class PeiZhi extends Component {
    constructor(props){
        super(props)
        this.state={
            isAdd:false,
            //表数据
            data:[],
            //key值
            key:-1,
        }
    }
    isAdd(){
        this.setState({isAdd:true})
    }
    
    //接收子组件传来的参数de函数,将该函数绑定在子组件上传过去让子组件调用传参！
    getMsg=(name,type,IPaddress,MACaddress)=>{
        this.state.key+=1;
        this.state.data.push({
                    key:this.state.key,
                    name,
                    type,
                    IPaddress,
                    MACaddress,
                    time:'2020-5-1',
        })
        this.setState({})
    }

    render() {
          
        return (
            <div className='PZcontainer'>
                <div className='PZheader'>
                    <Row justify="space-between">
                        <Col span={3}>
                            <img className='point' src={require("../images/back.png")} alt="" onClick={()=>{this.props.history.go(-1)}}/>
                        </Col>
                        <Col span={5}>
                            配置设备IP
                        </Col>
                        <Col span={3} onClick={this.isAdd.bind(this)}>
                            <img className='point' src={require("../images/add.png")} alt=""/>
                        </Col>
                    </Row>
                </div>
                <Ttable data={this.state.data}/>
                <Add isAdd={this.state.isAdd} getMsg={this.getMsg.bind(this)}/>
            </div>
        )
    }
}
