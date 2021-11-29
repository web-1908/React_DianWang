import React, { Component } from 'react'

import { HashRouter,BrowserRouter, Route,Link,Switch} from 'react-router-dom';
import PeiZhi from '../PeiZhi';
import Index from '../index';

export default class router  extends Component {
    render() {
        return (
            // HashRouter,BrowserRouter
          <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Index} />   
                <Route path='/index' component={Index} /> 
                <Route path='/peizhi' component={PeiZhi} />
            </Switch>
          </BrowserRouter>
 
        )
    }
}
