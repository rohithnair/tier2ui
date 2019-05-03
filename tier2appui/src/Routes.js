import { Switch,Route } from 'react-router'
import React, { Component } from 'react';
import App from "./App";
import Layout from "./Layout";
import { BrowserRouter } from 'react-router-dom'
import Deleted from './Deleted';
import All from './All';
class Routes extends Component {
  render() {
    return (
 
        <BrowserRouter>
        <Switch>
        <Route exact path="/" render={matchProps => <Layout><All {...matchProps} /></Layout>} >
        </Route>
        <Route exact path="/deleted" render={matchProps => <Layout><Deleted {...matchProps} /></Layout>} >
        </Route>
        <Route exact path="/recent" render={matchProps => <Layout><App {...matchProps} /></Layout>} >
        </Route>
        <Route  render={matchProps => <Layout><All {...matchProps} /></Layout>} >
        </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
