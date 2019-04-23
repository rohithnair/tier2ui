import { Route } from 'react-router'
import React, { Component } from 'react';
import App from "./App";
import Layout from "./Layout";
import { BrowserRouter } from 'react-router-dom'
import Deleted from './Deleted';

class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
        <Route exact path="/" render={matchProps => <Layout><App {...matchProps} /></Layout>} >
        </Route>
        <Route exact path="/deleted" render={matchProps => <Layout><Deleted {...matchProps} /></Layout>} >
        </Route>
      </BrowserRouter>
    );
  }
}

export default Routes;
