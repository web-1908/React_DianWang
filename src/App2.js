import React,{Component} from 'react';
import './App.css';

class App extends Component{
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
      isGuo:false,
      IsGuo:false,
      isSelect:[false,false,false],
      isSelect2:[false,false,false],
      // isSelect2:false,
      // isSelect3:false,
    }
  }
  componentDidMount(){
   
  }
  doit(img){
    let content=img.tit;
    if(img.tit=='智能国网商城'){
      this.setState({isClick:true,content,isGuo:false})
    }else{
      this.setState({isClick:true,content,isGuo:true});
    }
  }
  close(){
    this.setState({isClick:false})
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
    
  render(){
    return(
      <div className='container'>
        <div className='header'>
          电网总控
          <img className='point' src={require("./images/guanjiGreen.png")} alt=""/>
        </div>
        <div className='main'> 
            <div className='fs'>
              {this.state.images1.map((img,index)=>{
                return(
                  <div key={index} onClick={this.doit.bind(this,img)} className="point">
                    <img src={require('./images/'+img.src)} alt="" />
                    <span>{img.tit}</span>
                  </div>
                )
              })}
            </div>
            <div className="se">
              {this.state.images2.map((img,index)=>{
                return(
                  <div key={index} onClick={this.doit.bind(this,img)} className="point">
                    <img src={require('./images/'+img.src)} alt="" />
                    <span>{img.tit}</span>
                  </div>
                )
              })}
            </div>
        </div>
        {/* 弹出内容 */}
        <div className='alert' style={this.state.isClick?{display:'block'}:{display:'none'}}>
            <div className='alerttit'>
            <span>{this.state.content}</span>
              <span className='point' onClick={this.close.bind(this)}>
                <img src={require("./images/close.png")} alt=""/>
              </span>
            </div>
            {/* 点击智能国网弹出另一内容区域 */}
            {
                this.state.isGuo?            
                <div>
                  {/* <table></table> */}
                  {/* 关机图 */}
                  <div className='point guanji'>
                    <img src={require('./images/guanji.png')} alt=""/>
                  </div>
                </div>:<div>
                  {/* 上三图 */}
                  <div className='three point'>
                    <img onClick={this.select.bind(this,0)} src={this.state.isSelect[0]?require('./images/guoSe.png'):require('./images/guo.png')} alt=""/>
                    <img onClick={this.select.bind(this,1)} src={this.state.isSelect[1]?require('./images/yeSe.png'):require('./images/ye.png')} alt=""/>
                    <img onClick={this.select.bind(this,2)} src={this.state.isSelect[2]?require('./images/xinSe.png'):require('./images/xin.png')} alt=""/>
                  </div>
                  {/* 线图 */}
                  <div className="line" style={this.state.IsGuo?{display:'block'}:{display:'none'}}>
                    <img src={require('./images/line.png')} alt=""/>
                  </div>
                  {/* 三小图 */}
                  <div className='threeSm' style={this.state.IsGuo?{display:'flex'}:{display:'none'}}>
                    <img onClick={this.select2.bind(this,0)} src={this.state.isSelect2[0]?require('./images/wangSe.png'):require('./images/wang.png')} alt=""/>
                      <img onClick={this.select2.bind(this,1)} src={this.state.isSelect2[1]?require('./images/dianSe.png'):require('./images/dian.png')} alt=""/>
                      <img onClick={this.select2.bind(this,2)} src={this.state.isSelect2[2]?require('./images/zhangSe.png'):require('./images/zhang.png')} alt=""/>
                  </div>
                  {/* 下一关机图 */}
                  <div className={this.state.isGuo?'one point':'One point'}>
                    <img src={require('./images/guanji.png')} alt=""/>
                  </div>
                </div>
                
            }

        </div>
      </div>
    )
  }
}

export default App;
