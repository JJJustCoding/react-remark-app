import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from '../containers/App.js';
import Home from '../containers/Home/index.js';
import Detail from '../containers/Detail/index.js';
import NotFound from '../containers/404.js';

class RouterMap extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={Detail} path='/detail/:id' />
          <Route component={NotFound} path="*" />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterMap;
