import React, { Component } from 'react'
import { BrowserRouter, Route,Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <div>
                <h1>Details</h1>
                <button onClick={()=>{
                    this.props.history.push('/about')
                }}>关于我们</button>
            </div>
        )
    }
}

