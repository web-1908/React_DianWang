import React, { Component } from 'react'
import { BrowserRouter, Route,Link} from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <Link to='/details'>商品详情</Link><br/>
            </div>
        )
    }
}
