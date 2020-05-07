import React,{Component} from 'react';

class LoginOut extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={this.props.onClick.bind(this)}>LoginOut</button>
            </div>
        )
    }
}
export default LoginOut;