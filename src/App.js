import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import CustomRoute from './Route';
import configureStore from './store';

const { store } = configureStore();
class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Router>
            <CustomRoute />
          </Router>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
