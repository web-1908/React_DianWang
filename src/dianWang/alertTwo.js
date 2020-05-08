import React, { Component } from 'react'

export default class alertTwo extends Component {
    constructor(props){
        super(props);
        this.state={
            isSelect:[false,false,false],
            isSelect2:[false,false,false],
            IsGuo:false,
            content:'',
            isGuoClick:false,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            IsGuo:props.IsGuo,
            content:props.content,
            isGuoClick:props.isGuoClick
        })
    }
    close(){
        this.setState({isGuoClick:false})
    }

    select(i){
        let arr=[false,false,false];
        arr[i]=true;
        this.setState({isSelect:arr})
        //控制线 三小图显示隐藏
        if(i==0){
          this.setState({IsGuo:true});
        }else{
          this.setState({IsGuo:false});
        }
      }
      select2(i){
        let arr=[false,false,false];
        arr[i]=true;
        this.setState({isSelect2:arr})
      }

    render() {
        return (
            <div className='alertTwo' style={this.state.isGuoClick?{display:'block'}:{display:'none'}}>
                <div className='alerttit'>
                    <span>{this.state.content}</span>
                    <span className='point' onClick={this.close.bind(this)}>
                        <img src={require("../images/close.png")} alt=""/>
                    </span>
                </div>
                <div>
                    {/* 上三图 */}
                    <div className='three'>
                        <img onClick={this.select.bind(this,0)} src={this.state.isSelect[0]?require('../images/guoSe.png'):require('../images/guo.png')} alt=""/>
                        <img onClick={this.select.bind(this,1)} src={this.state.isSelect[1]?require('../images/yeSe.png'):require('../images/ye.png')} alt=""/>
                        <img onClick={this.select.bind(this,2)} src={this.state.isSelect[2]?require('../images/xinSe.png'):require('../images/xin.png')} alt=""/>
                    </div>
                    {/* 线图 */}
                    <div className="line" style={this.state.IsGuo?{display:'block'}:{display:'none'}}>
                        <img src={require('../images/line.png')} alt=""/>
                    </div>
                    {/* 三小图 */}
                    <div className='threeSm' style={this.state.IsGuo?{display:'flex'}:{display:'none'}}>
                        <img onClick={this.select2.bind(this,0)} src={this.state.isSelect2[0]?require('../images/wangSe.png'):require('../images/wang.png')} alt=""/>
                        <img onClick={this.select2.bind(this,1)} src={this.state.isSelect2[1]?require('../images/dianSe.png'):require('../images/dian.png')} alt=""/>
                        <img onClick={this.select2.bind(this,2)} src={this.state.isSelect2[2]?require('../images/zhangSe.png'):require('../images/zhang.png')} alt=""/>
                    </div>
                    {/* 下一关机图 */}
                    <div className={this.state.isGuo?'one point':'One point'}>
                        <img src={require('../images/guanji.png')} alt=""/>
                    </div>
                </div>
            
            </div>
        )
    }
}
