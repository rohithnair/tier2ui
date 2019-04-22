import { Route } from 'react-router'
import React, { Component } from 'react';
import App from "./App";
import Layout from "./Layout";
import { BrowserRouter } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
        <Route path="/" render={matchProps => <Layout><App {...matchProps} /></Layout>} >
        </Route>
      </BrowserRouter>
    );
  }
}

export default Routes;
