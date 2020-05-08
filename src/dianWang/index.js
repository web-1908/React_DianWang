import React, { Component } from 'react'

import { Row, Col,} from 'antd';

import 'antd/dist/antd.css';

import AlertOne from './alertOne'
import AlertTwo from './alertTwo';

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            images1:[
                {src:'cheng.png',tit:'智能国网商城'},
                {src:'tai.png',tit:'智能咨询台'},
                {src:'ji.png',tit:'智能茶几'},
                
              ],
              images2:[
                {src:'A.png',tit:'宣传屏A'},
                {src:'B.png',tit:'宣传屏B'},
                {src:'C.png',tit:'宣传屏C'},
              ],
              content:'',
              isClick:false,
              isGuoClick:false,
              isGuo:false,
              IsGuo:false,
              isSelect:[false,false,false],
              isSelect2:[false,false,false],
        }
    }
    doit(img){
        let content=img.tit;
        if(img.tit=='智能国网商城'){
          this.setState({isGuoClick:true,isClick:false,content,isGuo:false})
        }else{
          this.setState({isGuoClick:false,isClick:true,content,isGuo:true});
        }
      }

    render() {
        return (
            <div className='container'>
                <div className='header'>
                    电网总控
                    <img className='point' src={require("../images/guanjiGreen.png")} alt=""/>
                </div>
             
                <Row justify='space-around'>
                    {this.state.images1.map((img,index)=>{
                        return(
                           <Col span={4} key={index} >
                               <div className=' ico point' onClick={this.doit.bind(this,img)}>
                                   <img src={require('../images/'+img.src)} alt="" />
                                    <span>{img.tit}</span>
                               </div>

                            </Col> 
                        )
                    })}
                </Row>
                <Row justify="space-around">
                    {this.state.images2.map((img,index)=>{
                        return(
                            <Col span={4} key={index}>
                                <div className='point ico ' onClick={this.doit.bind(this,img)}>
                                    <img src={require('../images/'+img.src)} alt="" />
                                    <span>{img.tit}</span>
                                </div>  
                            </Col>
                        )
                    })}
                </Row>
                <AlertOne isClick={this.state.isClick} content={this.state.content} isGuo={this.state.isGuo}/>
                <AlertTwo isGuoClick={this.state.isGuoClick} IsGuo={this.state.IsGuo} content={this.state.content}/>
            </div>
        )
    }
}
